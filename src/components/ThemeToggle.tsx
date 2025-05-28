import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false); // Default to dark mode

  useEffect(() => {
    // Set dark mode as default on initial load
    // document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    console.log("Toggling theme");
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300"
      />
      <Moon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </div>
  );
};

export default ThemeToggle;
