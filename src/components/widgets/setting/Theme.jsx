// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Box, Stack, Typography, Grid} from "@mui/material";

// stores
import {setTheme} from "@/stores/slices/profile.js";

// utils
import {themeList} from "@/utils/constants.js";

const Theme = () => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.profile.setting);
    const {t} = useTranslation();
    const isDesktop = useMediaQuery('(max-width: 992px)');

    return (
        <Container
            maxWidth="md"
            disableGutters
            sx={{marginLeft: isDesktop ? "auto" : 0}}
        >

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
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

                <Stack
                    component="ul"
                    direction="row"
                    flexWrap="wrap"
                    gap={2}
                    sx={{
                        display: 'flex',
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%"
                    }}
                >
                    {
                        themeList.map(themeItem =>
                            <Box
                                component="li"
                                key={themeItem.id}
                                sx={{
                                    position: "relative",
                                    width: "25%",
                                    minWidth: 200,
                                    borderRadius: "50%",
                                    cursor:"pointer",
                                    "&::after":{
                                        content: themeItem.value === darkMode ? "'x'" : '""',
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50% , -50%)",
                                        color: darkMode ? "ternary.main" : "secondary.main",
                                    }
                                }}
                                onClick={() => dispatch(setTheme(themeItem.value))}
                            >
                                <LazyLoadImage
                                    src={themeItem.src}
                                    alt={t(themeItem.title)}
                                    width="100%"
                                    height="100%"
                                    style={{borderRadius: 8}}
                                />
                            </Box>
                        )
                    }

                </Stack>

            </Stack>

        </Container>
    )
}

export default Theme;

