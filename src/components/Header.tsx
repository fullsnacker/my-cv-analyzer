import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-start">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 font-inter">
              Analizador de CV <span className="text-primary">ATS</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
              Optimiza tu currículum para superar los filtros automáticos de
              reclutamiento y aumenta tus posibilidades de conseguir entrevistas
            </p>
          </div>
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
