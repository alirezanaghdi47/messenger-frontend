// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Grid, Stack, Typography} from "@mui/material";

// stores
import {setTheme} from "@/stores/slices/setting.js";

// utils
import {themeList} from "@/utils/constants.js";

const Theme = () => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

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

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "start",
                    alignItems: 'center',
                    width: "100%",
                }}
            >

                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    fontWeight='bold'
                >
                    {t("typography.theme")}
                </Typography>

            </Box>

            <Grid
                component="ul"
                container
                spacing={2}
                sx={{width: "100%"}}
            >
                {
                    themeList.map(themeItem =>
                        <Grid
                            key={themeItem.id}
                            component="li"
                            item
                            xs={6}
                            sm={4}
                            lg={3}
                            sx={{
                                cursor:"pointer",
                                opacity: darkMode === themeItem.value ? 1: 0.5,
                            }}
                            onClick={() => dispatch(setTheme(themeItem.value))}
                        >
                            <LazyLoadImage
                                src={themeItem.background}
                                alt={t(themeItem.title)}
                                width="100%"
                                height="100%"
                                style={{borderRadius: 8}}
                            />
                        </Grid>
                    )
                }

            </Grid>

        </Stack>
    )
}

export default Theme;

