import { useState } from "react";
import Head from "next/head";
import FileUpload from "../components/FileUpload";
import AnalysisResults from "../components/AnalysisResults";
import TipsSection from "../components/TipsSection";
import { CVAnalysis } from "../types";
import Header from "@/components/Header";
import Instructions from "@/components/Instructions";
import Footer from "@/components/Footer";
// import ResultsCard from "@/components/ResultsCard";
import { FileText, X } from "lucide-react";

// interface ResultsData {
//   score: number;
//   metrics: Array<{
//     label: string;
//     value: string;
//     status: "success" | "error" | "info";
//   }>;
//   recommendations: string[];
//   keywords: string[];
// }

const Home: React.FC = () => {
  const [analysis, setAnalysis] = useState<CVAnalysis | null>(null);

  // const [results, setResults] = useState<ResultsData | null>(null);

  // const simulateAnalysis = (): ResultsData => {
  //   const scores = [75, 82, 68, 91, 77];
  //   const score = scores[Math.floor(Math.random() * scores.length)];

  //   return {
  //     score,
  //     metrics: [
  //       { label: "Palabras totales", value: "450", status: "info" },
  //       {
  //         label: "Información de contacto",
  //         value: "Completa",
  //         status: "success",
  //       },
  //       {
  //         label: "Experiencia laboral",
  //         value: "Falta detalle",
  //         status: "error",
  //       },
  //       { label: "Educación", value: "Presente", status: "success" },
  //       {
  //         label: "Habilidades técnicas",
  //         value: "12 detectadas",
  //         status: "success",
  //       },
  //       {
  //         label: "Formato del documento",
  //         value: "Compatible",
  //         status: "success",
  //       },
  //     ],
  //     recommendations: [
  //       "Añade más palabras clave relevantes para tu sector profesional",
  //       "Incluye métricas específicas en tu experiencia laboral (números, porcentajes, logros)",
  //       "Agrega una sección de habilidades técnicas más detallada",
  //       "Optimiza la longitud del CV (recomendado: 1-2 páginas)",
  //       "Incluye certificaciones profesionales si las tienes",
  //     ],
  //     keywords: [
  //       "React",
  //       "JavaScript",
  //       "Scrum",
  //       "Git",
  //       "Node.js",
  //       "TypeScript",
  //       "Agile",
  //       "SQL",
  //       "Python",
  //       "Management",
  //       "Leadership",
  //       "Analytics",
  //     ],
  //   };
  // };

  // useEffect(() => {
  //   setResults(simulateAnalysis());
  // }, []);

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
      <body className="bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className=" bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 mb-32">
          <div className="max-w-3xl mx-auto">
            {!analysis ? (
              <>
                <FileUpload onAnalysisComplete={setAnalysis} />
                <Instructions />
              </>
            ) : (
              <>
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-8 max-w-md mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900 font-inter">
                          {analysis.file.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {(analysis.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setAnalysis(null)}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <AnalysisResults analysis={analysis} />
                {/* {results && <ResultsCard results={results} />} */}
                <TipsSection recommendations={analysis.recommendations} />
              </>
            )}
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default Home;
