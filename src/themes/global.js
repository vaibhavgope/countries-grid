import { createTheme } from '@material-ui/core';

const globalTheme = (darkMode) => {
    const theme = createTheme({
        typography: {
            allVariants: {
                color: "hsl(200, 15%, 8%)",
            },
            fontFamily: "'Nunito Sans', sans-serif",
        },
        palette: {
            primary: {
                main: "hsl(0, 0%, 100%)",
            },
            secondary: {
                main: "hsl(0, 0%, 52%)",
            },
            text: {
                primary: "hsl(200, 15%, 8%)",
                secondary: "hsl(0, 0%, 98%)",
            },
            background: {
                default: "hsl(0, 0%, 98%)",
            },
            type: darkMode ? 'dark' : 'light',
        },
    });
    const darkTheme = createTheme({
        typography: {
            allVariants: {
                color: "hsl(0, 0%, 100%)",
            },
            fontFamily: "Nunito Sans, sans-serif",
        },
        palette: {
            primary: {
                main: "hsl(209, 23%, 22%)",
            },
            secondary: {
                main: "hsl(209, 33%, 15%)",
            },
            text: {
                primary: "hsl(0, 0%, 100%)",
                secondary: "hsl(0, 0%, 98%)",
            },
            background: {
                default: "hsl(207, 26%, 17%)",
            },
            type: darkMode ? 'dark' : 'light',
        },
    });
    return darkMode?darkTheme:theme
}

export default globalTheme