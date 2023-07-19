import {useMemo, useEffect} from "react";
import {useSelector} from "react-redux";
import {CacheProvider} from "@emotion/react";
import {createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {enUS, faIR} from "@mui/material/locale";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
    key: "mui-rtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
    key: "mui-ltr",
});

const MuiProvider = ({children}) => {

    const {language, darkMode , color} = useSelector(state => state.account);

    useEffect(() => {
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    }, [language]);

    const addonTheme = createTheme({
        direction: language === "fa" ? "rtl" : "ltr",
        breakpoints: {
            keys: ["xs", "sm", "md", "lg", "xl"],
            values: {
                xs: 320,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200
            }
        },
        palette: {
            mode: darkMode ? "dark" : "light",
            common: {
                black: darkMode ? "#f1f5f9" : "#1e293b",
                white: darkMode ? "#1e293b" : "#f1f5f9"
            },
            text: {
                primary: darkMode ? "#f1f5f9" : "#1e293b",
                secondary: darkMode ? "#f8fafc" : "#334155",
            },
            background: {
                paper: darkMode ? "#334155" : "#f8fafc",
                default: darkMode ? "#1e293b" : "#f1f5f9"
            },
            primary: {
                main: color,
            },
            error: {
                main: "#DB4437",
            },
            warning: {
                main: "#F4B400"
            },
            info: {
                main: "#4285F4"
            },
            success: {
                main: "#0F9D58"
            },
            contrastThreshold: darkMode ? 3 : 2,
            tonalOffset: 0.1,
        },
        shape: {
            borderRadius: 8
        },
        shadows: [
            "none",
            "rgba(17, 17, 26, 0.1) 0px 0px 16px",
            "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
            "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
            Array(20).fill("none")
        ],
        typography: {
            fontFamily: "Vazirmatn , sans-serif"
        },
    }, language === "fa" ? faIR : enUS);

    const customizedTheme = useMemo(() => addonTheme, [language, darkMode]);

    return (
        <CacheProvider value={language === "fa" ? cacheRtl : emptyCache}>
            <ThemeProvider theme={customizedTheme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MuiProvider;
