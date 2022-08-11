import { createContext, useState, useEffect } from "react"

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

    useEffect(() => {
        setTheme(localStorage.getItem(LOCAL_STORAGE_KEY) === ThemeEnum.Dark ? ThemeEnum.Dark : ThemeEnum.Light); 
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => 
            prevTheme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light
        )
    }

    return (
        <ThemeCtx.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeCtx.Provider>
    )
}