import { CVAnalysis } from "../types";
import { keywords } from "./keywords";

export const analyzeCV = (text: string, file: File): CVAnalysis => {
  const cleanText = text.replace(/\s+/g, " ").trim();
  const wordCount = cleanText.split(/\s+/).length;
  const charCount = cleanText.length;

  // Detección de secciones
  const hasContactInfo =
    /(contacto|información personal|email|@|teléfono)/i.test(text);
  const hasExperience =
    /(experiencia|experiencia laboral|historial laboral|empleo anterior)/i.test(
      text
    );
  const hasEducation = /(educación|formación académica|estudios)/i.test(text);
  const hasSkills = /(habilidades|competencias|skills)/i.test(text);

  //remover comas y puntos de text
  const cleanedText = text.replace(/[.,]/g, "");

  const keywordList = cleanedText
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => keywords.includes(word));

  const uniqueKeywords = [...new Set(keywordList.map((k) => k.toLowerCase()))];

  // Calcular puntaje
  let score = 0;
  if (wordCount > 300 && wordCount < 800) score += 20;
  if (hasContactInfo) score += 15;
  if (hasExperience) score += 20;
  if (hasEducation) score += 15;
  if (hasSkills) score += 15;
  if (uniqueKeywords.length > 10) score += 15;

  // Recomendaciones
  const recommendations: string[] = [];
  if (wordCount < 300)
    recommendations.push(
      "Tu CV es demasiado corto. Considera añadir más detalles sobre tu experiencia y habilidades."
    );
  if (wordCount > 800)
    recommendations.push(
      "Tu CV es demasiado largo. Intenta resumir y mantenerlo conciso."
    );
  if (!hasContactInfo)
    recommendations.push("Añade una sección de información de contacto.");
  if (!hasExperience)
    recommendations.push(
      "Incluye una sección detallada de tu experiencia laboral."
    );
  if (!hasEducation)
    recommendations.push("No olvides mencionar tu formación académica.");
  if (!hasSkills)
    recommendations.push(
      "Crea una sección específica para tus habilidades clave."
    );
  if (uniqueKeywords.length < 10)
    recommendations.push(
      "Incorpora más palabras clave relevantes para tu industria."
    );

  return {
    file,
    score: Math.min(100, score),
    metrics: {
      wordCount,
      charCount,
      hasContactInfo,
      hasExperience,
      hasEducation,
      hasSkills,
      keywordCount: uniqueKeywords.length,
    },
    recommendations,
    uniqueKeywords,
  };
};
