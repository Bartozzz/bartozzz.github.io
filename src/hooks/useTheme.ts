import * as React from "react";

declare global {
  type Theme = "dark" | "light";

  interface Window {
    __theme: Theme;
    __setPreferredTheme: (theme: Theme) => void;
    __onThemeChange: () => void;
  }
}

export function useTheme() {
  const [theme, setTheme] = React.useState<Theme | null>(null);

  const setAndPersistTheme = React.useCallback((theme: Theme) => {
    window.__setPreferredTheme(theme);
    setTheme(theme);
  }, []);

  React.useEffect(() => {
    setTheme(window.__theme);
  }, []);

  React.useEffect(() => {
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return [theme, setAndPersistTheme] as const;
}
