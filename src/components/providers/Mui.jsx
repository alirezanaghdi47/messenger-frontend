// libraries
import {useMemo, useEffect} from "react";
import {useSelector} from "react-redux";
import {CacheProvider} from "@emotion/react";
import {createTheme, ThemeProvider, responsiveFontSizes, alpha} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFnsJalali} from "@mui/x-date-pickers/AdapterDateFnsJalali";
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

const Mui = ({children}) => {

    const {language, darkMode, color} = useSelector(state => state.user);

    useEffect(() => {
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    }, [language]);

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
                default: darkMode ? "#1e293b" : "#f1f5f9",
            },
            primary: {
                main: darkMode ? color.dark : color.light,
            },
            secondary: {
                main: darkMode ? "#475569" : "#e2e8f0"
            },
            ternary: {
                main: darkMode ? "#e2e8f0" : "#475569"
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
            fontFamily: "Vazirmatn , sans-serif",
            caption: {
                lineHeight: 1
            }
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
            MuiDayCalendar: {
                styleOverrides: {
                    weekDayLabel: ({theme, ownerState}) => ({
                        color: theme.palette.common.dark,
                        fontSize: theme.typography.subtitle2.fontSize,
                        fontWeight: "bold",
                    }),
                }
            },
            MuiPickersToolbarText: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        color: theme.palette.common.black,
                        fontWeight: "bold",
                        "&.Mui-selected": {
                            color: theme.palette.primary.main,
                        }
                    }),
                    separator: ({theme, ownerState}) => ({
                        color: theme.palette.secondary.main,
                    }),
                }
            },
            MuiDatePickerToolbar: {
                styleOverrides: {
                    title: ({theme, ownerState}) => ({
                        color: theme.palette.common.black,
                        fontWeight: "bold"
                    }),
                }
            },
            MuiPickersCalendarHeader: {
                styleOverrides: {
                    label: ({theme, ownerState}) => ({
                        color: theme.palette.common.black,
                        fontWeight: "bold"
                    }),
                }
            },
            MuiPickersYear: {
                styleOverrides: {
                    yearButton: ({theme, ownerState}) => ({
                        color: theme.palette.common.black,
                        fontWeight: "bold",
                        "&.Mui-selected": {
                            background: theme.palette.primary.main
                        }
                    }),
                }
            },
            MuiPickersDay: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        color: theme.palette.common.dark,
                        fontWeight: "bold",
                        border: 'none !important',
                        "&.Mui-selected": {
                            background: `${theme.palette.primary.main}!important`,
                            color: `${theme.palette.getContrastText(theme.palette.primary.main)}!important`
                        },
                        "&:hover": {
                            background: alpha(theme.palette.primary.light, 0.24),
                        },
                    }),
                    today: ({theme, ownerState}) => ({
                        background: `${theme.palette.secondary.main}!important`,
                        color: `${theme.palette.getContrastText(theme.palette.secondary.main)}!important`,
                        "&:hover": {
                            background: theme.palette.secondary.main,
                            color: theme.palette.getContrastText(theme.palette.secondary.main),
                        }
                    })
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        fontWeight: "bold",
                    }),
                },
                defaultProps: {
                    disableElevation: true,
                    disableRipple: true
                }
            },
            MuiIconButton: {
                variants: [
                    {
                        props: {variant: "contained"},
                        style: ({theme, ownerState}) => ({
                            background: theme.palette[ownerState.color].main,
                            color: theme.palette.getContrastText(theme.palette[ownerState.color].main),
                        })
                    },
                    {
                        props: {variant: "outlined"},
                        style: ({theme, ownerState}) => ({
                            background: alpha(theme.palette[ownerState.color].main, 0.5),
                            color: theme.palette.getContrastText(theme.palette[ownerState.color].main),
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
                    disableRipple: true
                }
            },
            MuiChip: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        borderRadius: theme.shape.borderRadius,
                    })
                }
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
                },
                defaultProps: {
                    elevation: 2
                }
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        minHeight: "unset",
                        fontSize: theme.typography.body2.fontSize,
                        fontWeight: "bold",
                        color: theme.palette.getContrastText(theme.palette.secondary.main),
                        borderRadius: theme.shape.borderRadius,
                        "&.Mui-selected": {
                            background: `${theme.palette.primary.main} !important`,
                            color: `${theme.palette.getContrastText(theme.palette.primary.main)} !important`,
                            "&:hover": {
                                background: theme.palette.primary.main,
                            }
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

    const customizedTheme = useMemo(() => responsiveFontSizes(addonTheme), [language, darkMode, color]);

    return (
        <CacheProvider value={language === "fa" ? cacheRtl : emptyCache}>

            <ThemeProvider theme={customizedTheme}>

                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>

                    <CssBaseline/>

                    {children}

                </LocalizationProvider>

            </ThemeProvider>

        </CacheProvider>
    );
}

export default Mui;
