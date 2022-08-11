import { createContext, useState, useEffect, useRef } from "react"

interface Props {
    children: React.ReactNode;
}

export enum ThemeEnum {
    Light = 'Light Mode',
    Dark = 'Dark Mode',
}

const initialValues = {
    theme: ThemeEnum.Light,
    toggleTheme: () => {}
}

export const ThemeCtx = createContext(initialValues);

const LOCAL_STORAGE_KEY = 'tayo-portfolio-theme';

export function ThemeProvider({children}: Props){
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Light);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    const newTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    setTheme(newTheme === ThemeEnum.Dark ? ThemeEnum.Dark : ThemeEnum.Light); 
  }, []);

  useEffect(() => {
    // useEffect runs on first render so we don't want the 'setItem' to run until the 
    // 'setTheme' is actually called
    if(!hasMountedRef.current){
      hasMountedRef.current = true;
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light);
  }

  return (
    <ThemeCtx.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeCtx.Provider>
  );
}
