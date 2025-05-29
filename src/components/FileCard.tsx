import { FileText, X } from "lucide-react";
import { CVAnalysis } from "../types";

interface FileCardProps {
  clearAnalysis: () => void;
  analysis: CVAnalysis;
}

export const FileCard: React.FC<FileCardProps> = ({
  clearAnalysis,
  analysis,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-8 max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="w-8 h-8 text-primary" />
          <div>
            <p className="font-medium text-gray-900 font-inter">
              {analysis.file.name}
            </p>
            <p className="text-sm text-gray-500">
              {(analysis.file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>
        <button
          onClick={() => clearAnalysis()}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
