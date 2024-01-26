// libraries
import {useMemo, useEffect} from "react";
import {useSelector} from "react-redux";
import {CacheProvider} from "@emotion/react";
import {createTheme, ThemeProvider, responsiveFontSizes, useMediaQuery} from "@mui/material";
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

    const {language, darkMode, color} = useSelector(state => state.setting.appearance);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    }, [language]);

    useEffect(() => {
        document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, [darkMode, prefersDarkMode]);

    const mode = useMemo(() => {
        return darkMode ? "dark" : "light";
    } , [darkMode, prefersDarkMode]);

    const addonTheme = createTheme({
        direction: language === "fa" ? "rtl" : "ltr",
        breakpoints: {
            keys: ["xs", "sm", "md", "lg", "xl"],
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200
            }
        },
        palette: {
            mode: mode,
            common: {
                black: mode === "dark" ? "#f1f5f9" : "#1e293b",
                white: mode === "dark" ? "#1e293b" : "#f1f5f9"
            },
            text: {
                primary: mode === "dark" ? "#f1f5f9" : "#1e293b",
                secondary: mode === "dark" ? "#f8fafc" : "#334155",
            },
            background: {
                paper: mode === "dark" ? "#334155" : "#f8fafc",
                default: mode === "dark" ? "#1e293b" : "#f1f5f9",
            },
            primary: {
                main: mode === "dark" ? color.dark : color.light,
            },
            secondary: {
                main: mode === "dark" ? "#475569" : "#e2e8f0"
            },
            ternary: {
                main: mode === "dark" ? "#e2e8f0" : "#475569"
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
            light:{
                main: "#e2e8f0"
            },
            dark:{
                main: "#475569"
            },
            contrastThreshold: mode === "dark" ? 3 : 2,
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
            fontFamily: language === "fa" ? "Vazirmatn FD , sans-serif" : "Vazirmatn , sans-serif",
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        userSelect: "none"
                    },
                    ul: {
                        margin: 0,
                        padding: 0,
                    },
                    li: {
                        margin: 0,
                        padding: 0,
                        listStyleType: "none"
                    },
                    p: {
                        margin: 0
                    },
                    video: {
                        borderRadius: 8
                    }
                }
            },
            MuiTypography:{
              styleOverrides:{
                  root: ({theme, ownerState}) => ({
                      lineHeight: "100%"
                  }),
              }
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: ({theme, ownerState}) => ({
                        height: 4,
                        borderRadius: 8
                    }),
                }
            },
            MuiTab: {
                defaultProps: {
                    disableRipple: true,
                    disableTouchRipple: true,
                    disableFocusRipple: true
                },
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        fontWeight: "bold",
                        lineHeight: "100%"
                    }),
                },
            },
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true,
                    disableTouchRipple: true,
                }
            },
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                    disableRipple: true,
                    disableTouchRipple: true,
                    disableFocusRipple: true
                },
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        fontWeight: "bold",
                        lineHeight: "100%"
                    }),
                },
            },
            MuiIconButton: {
                variants: [
                    {
                        props: {variant: "contained"},
                        style: ({theme, ownerState}) => ({
                            background: theme.palette[ownerState.color].main,
                            color: theme.palette.getContrastText(theme.palette[ownerState.color].main),
                            "&:hover": {
                                background: theme.palette[ownerState.color].main,
                            }
                        })
                    },
                    {
                        props: {variant: "text"},
                        style: ({theme, ownerState}) => ({
                            background: "transparent",
                            color: theme.palette[ownerState.color].main,
                        })
                    }
                ],
                defaultProps: {
                    disableRipple: true,
                    disableTouchRipple: true,
                    disableFocusRipple: true
                }
            },
            MuiPopover:{
                defaultProps:{
                    elevation: 2
                }
            },
            MuiChip: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        borderRadius: theme.shape.borderRadius,
                    })
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        fontWeight: "bold",
                    })
                }
            },
            MuiFormControlLabel: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: 0
                    }),
                    label: ({theme, ownerState}) => ({
                        fontSize: theme.typography.subtitle2.fontSize,
                        fontWeight: "bold",
                    })
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        fontWeight: "bold",
                    })
                }
            },
            MuiInputBase: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        background: theme.palette.secondary.main,
                        fontWeight: "bold",
                        color: theme.palette.getContrastText(theme.palette.secondary.main),
                        borderRadius: theme.shape.borderRadius,
                    }),
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: ({theme, ownerState}) => ({
                        border: `none`,
                    }),
                }
            },
            MuiSelect: {
                defaultProps: {
                    MenuProps: {
                        elevation: 2
                    }
                }
            },
            MuiTouchRipple: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        display: "none",
                        "&:hover": {
                            display: "none",
                        }
                    }),
                }
            },
            MuiSlider: {
                styleOverrides: {
                    valueLabel: ({theme, ownerState}) => ({
                        background: theme.palette.primary.main,
                        fontWeight: "bold",
                        color: theme.palette.getContrastText(theme.palette.primary.main),
                        borderRadius: theme.shape.borderRadius,
                    }),
                }
            },
            MuiBadge: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        borderRadius: theme.shape.borderRadius,
                    }),
                    dot: ({theme, ownerState}) => ({
                        width: 12,
                        height: 12,
                        borderRadius: theme.shape.borderRadius,
                    }),
                    anchorOriginTopLeftRectangular: ({theme, ownerState}) => ({
                        top: 0,
                        left: -4
                    }),
                }
            },
            MuiList: {
                defaultProps: {
                    disablePadding: true
                }
            },
            MuiMenu: {
                defaultProps: {
                    elevation: 2
                },
                styleOverrides: {
                    paper: ({theme, ownerState}) => ({
                        maxWidth: 320,
                        maxHeight: "unset",
                    }),
                    list: ({theme, ownerState}) => ({
                        "&::-webkit-scrollbar": {
                            display: "none ",
                        },
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        padding: 8,
                    })
                }
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        minHeight: "unset",
                        fontSize: theme.typography.body2.fontSize,
                        fontWeight: "bold",
                        borderRadius: theme.shape.borderRadius,
                        "&:hover": {
                            background: "transparent"
                        }
                    })
                }
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: ({theme, ownerState}) => ({
                        background: theme.palette.primary.main,
                        color: theme.palette.getContrastText(theme.palette.primary.main),
                        fontSize: theme.typography.caption.fontSize,
                        fontWeight: "bold",
                    }),
                    arrow: ({theme, ownerState}) => ({
                        "&::before": {
                            background: theme.palette.primary.main,
                        }
                    })
                }
            },
        }
    }, language === "fa" ? faIR : enUS);

    const customizedTheme = useMemo(() => responsiveFontSizes(addonTheme), [language, darkMode, prefersDarkMode, color]);

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
