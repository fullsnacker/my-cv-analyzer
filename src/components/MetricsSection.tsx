import { Check, X } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  status: "success" | "error" | "info";
}

interface MetricsSectionProps {
  metrics: Metric[];
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics }) => {
  const getIcon = (status: string) => {
    switch (status) {
      case "success":
        return <Check className="w-5 h-5 text-success" />;
      case "error":
        return <X className="w-5 h-5 text-red-500" />;
      default:
        return <div className="w-5 h-5 rounded-full bg-gray-300" />;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 font-inter">
        Análisis Detallado
      </h3>

      <div className="grid gap-3">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              {getIcon(metric.status)}
              <span className="text-gray-900 font-medium font-inter">
                {metric.label}
              </span>
            </div>
            <span className="text-gray-600 font-inter">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
