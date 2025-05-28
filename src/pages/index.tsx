import { useState } from "react";
import Head from "next/head";
import FileUpload from "../components/FileUpload";
import AnalysisResults from "../components/AnalysisResults";
import TipsSection from "../components/TipsSection";
import { CVAnalysis } from "../types";
// import Header from "@/components/Header";

const Home: React.FC = () => {
  const [analysis, setAnalysis] = useState<CVAnalysis | null>(null);

  return (
    <>
      <Head>
        <title>Analizador de CV ATS</title>
        <meta
          name="description"
          content="Analiza tu CV para sistemas de seguimiento de candidatos (ATS)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-3xl mx-auto">
          {/* <Header /> */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-dark sm:text-4xl">
              Analizador de CV para Sistemas ATS
            </h1>
            <p className="mt-3 text-xl text-gray-500">
              Sube tu currículum para evaluar su compatibilidad con sistemas de
              reclutamiento automatizado
            </p>
          </div>
          <FileUpload onAnalysisComplete={setAnalysis} />

          {/* {!analysis && (
            <>
              <FileUpload onAnalysisComplete={setAnalysis} />

              <section className="text-center py-8">
                <div className="max-w-2xl mx-auto space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-inter">
                    ¿Cómo funciona?
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 transition-colors">
                      <div className="w-12 h-12 bg-red-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary font-bold text-lg">
                          1
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-inter">
                        Sube tu CV
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                        Carga tu currículum en formato PDF o DOCX
                      </p>
                    </div>

                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 transition-colors">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary font-bold text-lg">
                          2
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-inter">
                        Análisis automático
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                        Evaluamos tu CV con criterios ATS profesionales
                      </p>
                    </div>

                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 transition-colors">
                      <div className="w-12 h-12 bg-success-100 dark:bg-success-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-success font-bold text-lg">
                          3
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-inter">
                        Recibe recomendaciones
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                        Obtén sugerencias específicas para mejorar
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )} */}

          {analysis && (
            <>
              <AnalysisResults analysis={analysis} />
              <TipsSection recommendations={analysis.recommendations} />
            </>
          )}
        </div>
      </main>

      {/* <footer className="w-full mt-16 py-8 border-t border-gray-200 bg-white transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 font-inter">
            Desarrollado con ❤️ por{" "}
            <a
              href="https://fullsnacker.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fullsnacker
            </a>{" "}
            para ayudarte a conseguir el trabajo de tus sueños
          </p>
        </div>
      </footer> */}
      <footer className="w-full mt-16 py-8 border-t border-gray-200 bg-white transition-colors fixed bottom-10 left-0">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 font-inter">
            Desarrollado con ❤️ por{" "}
            <a
              href="https://fullsnacker.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fullsnacker
            </a>{" "}
            para ayudarte a conseguir el trabajo de tus sueños
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
