interface TipsSectionProps {
  recommendations: string[];
}

const TipsSection: React.FC<TipsSectionProps> = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          ¡Buen trabajo!
        </h3>
        <p className="text-green-700">
          Tu CV cumple con los parámetros básicos para sistemas ATS.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark mb-4">
          Recomendaciones para mejorar tu CV
        </h3>
        <ul className="space-y-3">
          {recommendations.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary mr-2 mt-1">•</span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TipsSection;
