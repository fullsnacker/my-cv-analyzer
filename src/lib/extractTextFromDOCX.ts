import mammoth from "mammoth";
import { FileParser } from "../types";

export const extractTextFromDOCX: FileParser = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  } catch (error) {
    console.error("Error parsing DOCX:", error);
    throw new Error(
      "Error procesando el archivo DOCX. Asegúrate que sea un documento válido."
    );
  }
};
