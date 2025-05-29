import React from "react";
// import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-800 transition-colors mb-5">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-start">
          <div className="text-center flex-1">
            <h1 className="text-3xl font-extrabold text-gray-300 sm:text-4xl">
              Analizador de CV para Sistemas ATS
            </h1>
            <p className="mt-3 text-xl text-gray-300">
              Optimiza tu currículum para superar los filtros automáticos de
              reclutamiento y aumenta tus posibilidades de conseguir entrevistas
            </p>
          </div>
          {/* <div className="flex-shrink-0">
            <ThemeToggle />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
