// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Box, Grid, Stack} from "@mui/material";
import {FiCheck} from "react-icons/fi";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {useEditThemeMutation} from "stores/apis/settingApi";
import {setTheme} from "stores/slices/settingSlice";

const themeList = [
    {id: 1, title: "select.light", value: false, background: "/images/light-mode.jpg"},
    {id: 2, title: "select.dark", value: true, background: "/images/dark-mode.jpg"},
];

const ThemeItem = ({themeItem}) => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.setting.appearance);
    const [editTheme , editThemeResponse] = useEditThemeMutation();

    const _handleEditTheme = () => {
        editTheme({darkMode: themeItem.value});
    }

    useEffect(() => {
        if (editThemeResponse.status === "fulfilled") {
            dispatch(setTheme(editThemeResponse.data));
        }
    }, [editThemeResponse]);

    return (
        <Grid
            component="li"
            item
            xs={6}
            sm={4}
            lg={3}
            sx={{cursor: "pointer"}}
            onClick={_handleEditTheme}
        >

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                }}
            >

                <LazyLoadImage
                    src={themeItem.background}
                    alt={themeItem.id}
                    visibleByDefault
                    width="100%"
                    height="100%"
                    effect='blur'
                    style={{
                        borderRadius: 8,
                        objectFit: "cover"
                    }}
                />

                {
                    themeItem.value === darkMode ? (
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50% , -50%)",
                                zIndex: 50,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 32,
                                height: 32,
                                bgcolor: "primary.main",
                                color: "secondary.main",
                                borderRadius: "50%"
                            }}
                        >
                            <FiCheck size={24}/>
                        </Box>
                    ) : null
                }

            </Box>

        </Grid>
    )
}

const Theme = () => {

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: "100%",
            }}
        >

            <Header title="typography.theme"/>

            <Grid
                component="ul"
                container
                spacing={2}
                sx={{width: "100%"}}
            >
                {
                    themeList.map(themeItem =>
                        <ThemeItem
                            key={themeItem.id}
                            themeItem={themeItem}
                        />
                    )
                }

            </Grid>

        </Stack>
    )
}

export default Theme;

