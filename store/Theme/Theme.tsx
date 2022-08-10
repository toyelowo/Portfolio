import { createContext, useState, useEffect } from "react"

interface Props {
    children: React.ReactNode;
}

enum Theme {
    Light = 'Light Mode',
    Dark = 'Dark Mode',
}

const initialValues = {
    theme: Theme.Light,
    toggleTheme: () => {}
}

export const ThemeCtx = createContext(initialValues);

const LOCAL_STORAGE_KEY = 'tayo-portfolio-theme';
export function ThemeProvider({children}: Props){
    const [theme, setTheme] = useState<Theme>(Theme.Light);

    useEffect(() => {
        setTheme(localStorage.getItem(LOCAL_STORAGE_KEY) === Theme.Dark ? Theme.Dark : Theme.Light); 
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => 
            prevTheme === Theme.Light ? Theme.Dark : Theme.Light
        )
    }

    return (
        <ThemeCtx.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeCtx.Provider>
    )
}