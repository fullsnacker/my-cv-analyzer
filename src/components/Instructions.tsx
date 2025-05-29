export const Instructions = () => {
  return (
    <section className="text-center py-8">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-white font-inter">
          ¿Cómo funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-lg">1</span>
            </div>
            <h3 className="font-semibold text-white mb-2 font-inter">
              Sube tu CV
            </h3>
            <p className="text-gray-300 text-sm font-inter">
              Carga tu currículum en formato PDF o DOCX
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-lg">2</span>
            </div>
            <h3 className="font-semibold text-white mb-2 font-inter">
              Análisis automático
            </h3>
            <p className="text-gray-300 text-sm font-inter">
              Evaluamos tu CV con criterios ATS profesionales
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-green-200  rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-success font-bold text-lg">3</span>
            </div>
            <h3 className="font-semibold text-white mb-2 font-inter">
              Recibe recomendaciones
            </h3>
            <p className="text-gray-300 text-sm font-inter">
              Obtén sugerencias específicas para mejorar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
