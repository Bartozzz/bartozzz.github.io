import * as React from "react";

declare global {
  type Theme = "dark" | "light";

  interface Window {
    __theme: Theme;
    __setPreferredTheme: (theme: Theme) => void;
    __onThemeChange: () => void;
  }
}

const ThemeContext = React.createContext<{
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
}>({
  theme: null,
  setTheme: () => void 0,
});

export function ThemeProvider({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) {
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

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setAndPersistTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return [theme, setTheme] as const;
}
