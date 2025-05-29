import { AlertCircle, TrendingUp } from "lucide-react";

interface RecommendationsSectionProps {
  recommendations: string[];
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({
  recommendations,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-gray-900 font-inter">
          Recomendaciones para Mejorar
        </h3>
      </div>

      <div className="space-y-3">
        {recommendations.map((recommendation, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100"
          >
            <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-gray-700 font-inter leading-relaxed">
              {recommendation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
