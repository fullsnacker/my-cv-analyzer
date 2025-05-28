import { CVAnalysis } from "../types";

interface AnalysisResultsProps {
  analysis: CVAnalysis;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ analysis }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-dark mb-6">
          Resultados del Análisis
        </h2>

        {/* Score Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-700">Puntaje ATS</h3>
            <span className="text-xl font-bold text-primary">
              {analysis.score}/100
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-red-500 to-green-500 h-4 rounded-full"
              style={{ width: `${analysis.score}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Compatibilidad con sistemas de seguimiento de candidatos
          </p>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Estadísticas
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Palabras:</span>
                <span className="font-medium">
                  {analysis.metrics.wordCount}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Caracteres:</span>
                <span className="font-medium">
                  {analysis.metrics.charCount}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Palabras clave:</span>
                <span className="font-medium">
                  {analysis.metrics.keywordCount}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Secciones
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Información de contacto:</span>
                <span
                  className={
                    analysis.metrics.hasContactInfo
                      ? "text-secondary"
                      : "text-red-500"
                  }
                >
                  {analysis.metrics.hasContactInfo
                    ? "✅ Presente"
                    : "❌ Faltante"}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Experiencia laboral:</span>
                <span
                  className={
                    analysis.metrics.hasExperience
                      ? "text-secondary"
                      : "text-red-500"
                  }
                >
                  {analysis.metrics.hasExperience
                    ? "✅ Presente"
                    : "❌ Faltante"}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Educación:</span>
                <span
                  className={
                    analysis.metrics.hasEducation
                      ? "text-secondary"
                      : "text-red-500"
                  }
                >
                  {analysis.metrics.hasEducation
                    ? "✅ Presente"
                    : "❌ Faltante"}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Habilidades:</span>
                <span
                  className={
                    analysis.metrics.hasSkills
                      ? "text-secondary"
                      : "text-red-500"
                  }
                >
                  {analysis.metrics.hasSkills ? "✅ Presente" : "❌ Faltante"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
