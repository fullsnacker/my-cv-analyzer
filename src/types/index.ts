export interface CVAnalysis {
  score: number;
  metrics: {
    wordCount: number;
    charCount: number;
    hasContactInfo: boolean;
    hasExperience: boolean;
    hasEducation: boolean;
    hasSkills: boolean;
    keywordCount: number;
  };
  recommendations: string[];
  uniqueKeywords: string[];
  file: File;
}

export interface FileParser {
  (file: File): Promise<string>;
}

export interface ResultsData {
  score: number;
  metrics: Array<{
    label: string;
    value: string;
    status: "success" | "error" | "info";
  }>;
  recommendations: string[];
  keywords: string[];
}
