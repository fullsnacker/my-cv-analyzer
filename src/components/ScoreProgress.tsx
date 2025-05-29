
import React from 'react';

interface ScoreProgressProps {
  score: number;
  className?: string;
}

const ScoreProgress: React.FC<ScoreProgressProps> = ({ score, className = '' }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-success';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getScoreText = (score: number) => {
    if (score >= 80) return 'Excelente';
    if (score >= 60) return 'Bueno';
    return 'Necesita mejoras';
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-900 font-inter">
          Puntaje ATS
        </span>
        <span className="text-2xl font-bold text-gray-900 font-inter">
          {score}/100
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-out ${getScoreColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
      
      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium font-inter ${
          score >= 80 ? 'text-success' : score >= 60 ? 'text-yellow-600' : 'text-red-600'
        }`}>
          {getScoreText(score)}
        </span>
        <span className="text-sm text-gray-500 font-inter">
          Compatibilidad con sistemas de reclutamiento
        </span>
      </div>
    </div>
  );
};

export default ScoreProgress;
