import { useEffect, useState } from "react";
import Head from "next/head";
import { CVAnalysis, ResultsData } from "../types";
import {
  FileCard,
  FileUpload,
  Footer,
  Header,
  Instructions,
  ResultsCard,
} from "@/components";
import { parseAnalysis } from "@/lib";

const Home: React.FC = () => {
  const [analysis, setAnalysis] = useState<CVAnalysis | null>(null);

  const [results, setResults] = useState<ResultsData | null>(null);

  useEffect(() => {
    if (analysis) setResults(parseAnalysis(analysis));
  }, [analysis]);

  const clearAnalysis = () => {
    setAnalysis(null);
    setResults(null);
  };

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
      <body className="bg-gray-900">
        <Header />
        <main className=" bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 mb-32">
          <div className="max-w-3xl mx-auto">
            {!analysis ? (
              <>
                <FileUpload onAnalysisComplete={setAnalysis} />
                <Instructions />
              </>
            ) : (
              <>
                <FileCard clearAnalysis={clearAnalysis} analysis={analysis} />
                {results && <ResultsCard results={results} />}
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
