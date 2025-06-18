import { MetricsSection } from "./MetricsSection";
import { RecommendationsSection } from "./RecommendationsSection";
import { ScoreProgress } from "./ScoreProgress";

interface ResultsData {
  score: number;
  metrics: Array<{
    label: string;
    value: string;
    status: "success" | "error" | "info";
  }>;
  recommendations: string[];
  keywords: string[];
}

interface ResultsCardProps {
  results: ResultsData;
  className?: string;
}

export const ResultsCard: React.FC<ResultsCardProps> = ({
  results,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-8 animate-fade-in mt-2 ${className}`}
    >
      {/* Header con keywords detectadas */}
      <div className="text-center p-4 bg-gradient-to-r from-primary-50 to-success-50 rounded-lg">
        <p className="text-lg font-semibold text-gray-900 mb-2 font-inter">
          🔍 {results.keywords.length} palabras clave detectadas
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {results.keywords
            .slice(0, results.keywords.length)
            .map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white text-primary text-sm font-medium rounded-full shadow-sm"
              >
                {keyword}
              </span>
            ))}
        </div>
      </div>

      {/* Puntaje ATS */}
      <ScoreProgress score={results.score} />

      {/* Métricas */}
      <MetricsSection metrics={results.metrics} />

      {/* Recomendaciones */}
      {results.recommendations.length > 0 && (
        <RecommendationsSection recommendations={results.recommendations} />
      )}

      {/* Footer con mensaje de éxito */}
      <div className="text-center p-4 bg-success-50 rounded-lg border border-success-200">
        <p className="text-success-700 font-medium font-inter">
          ✅ Cumple con el {Math.round((results.score / 100) * 100)}% de los
          estándares ATS
        </p>
      </div>
    </div>
  );
};
