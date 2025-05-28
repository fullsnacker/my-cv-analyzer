import { useState } from "react";
import { extractTextFromPDF } from "../lib/pdfParser";
import { extractTextFromDOCX } from "../lib/docxParser";
import { analyzeCV } from "../lib/atsChecker";
import { CVAnalysis } from "../types";

interface FileUploadProps {
  onAnalysisComplete: (analysis: CVAnalysis) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onAnalysisComplete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError(null);

    try {
      let text = "";
      if (file.type === "application/pdf") {
        text = await extractTextFromPDF(file);
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        text = await extractTextFromDOCX(file);
      } else {
        throw new Error(
          "Formato no soportado. Por favor, sube un archivo PDF o DOCX"
        );
      }

      const analysis = analyzeCV(text);
      onAnalysisComplete(analysis);
    } catch (error) {
      console.error("Error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "El archivo PDF no pudo ser procesado. Intenta con otro archivo."
      );
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-md border border-blue-300 cursor-pointer hover:bg-blue-50 transition-colors">
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleFileChange}
          disabled={isLoading}
          className="hidden"
        />
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-primary mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className="text-lg font-medium text-dark">
            {isLoading ? "Procesando..." : "Sube tu CV (PDF o DOCX)"}
          </span>
          <span className="text-sm text-gray-500 mt-1">
            Arrastra o haz clic para seleccionar
          </span>
        </div>
      </label>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
