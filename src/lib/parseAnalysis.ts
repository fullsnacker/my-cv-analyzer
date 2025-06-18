import { CVAnalysis, ResultsData } from "@/types";

export const parseAnalysis = (analysis: CVAnalysis): ResultsData => {
  const { score, metrics, uniqueKeywords, recommendations } = analysis;

  const { wordCount, hasContactInfo, hasExperience, hasEducation } = metrics;

  return {
    score,
    metrics: [
      {
        label: "Palabras totales",
        value: wordCount.toString(),
        status: "info",
      },
      {
        label: "Información de contacto",
        value: hasContactInfo ? "Completa" : "Falta sección de contacto",
        status: hasContactInfo ? "success" : "error",
      },
      {
        label: "Experiencia laboral",
        value: hasExperience
          ? "Completa"
          : "Falta sección de experiencia laboral",
        status: hasExperience ? "success" : "error",
      },
      {
        label: "Educación",
        value: hasEducation ? "Presente" : "Falta sección de educación",
        status: hasEducation ? "success" : "error",
      },
      {
        label: "Habilidades técnicas",
        value: `${uniqueKeywords.length} detectadas`,
        status: uniqueKeywords.length >= 10 ? "success" : "error",
      },
      {
        label: "Formato del documento",
        value: "Compatible con ATS",
        status: "success",
      },
    ],
    recommendations: recommendations,
    keywords: uniqueKeywords,
  };
};
