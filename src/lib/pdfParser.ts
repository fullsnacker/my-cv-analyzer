/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/client/pdf.ts
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const extractTextFromPDF = async (file: File): Promise<string> => {
  if (typeof window === "undefined") {
    throw new Error("extractTextFromPDF solo puede usarse en el cliente");
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument(arrayBuffer);
    const pdf = await loadingTask.promise;

    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const text = textContent.items
        .map((item: any) => (item as any).str)
        .join(" ");
      fullText += text + "\n";
    }

    return fullText.trim();
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw new Error("No se pudo leer el PDF. ¿Está protegido o es un escaneo?");
  }
};
