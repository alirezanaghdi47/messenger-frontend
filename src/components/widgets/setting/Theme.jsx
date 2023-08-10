// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Box, Button, Stack, Typography} from "@mui/material";

// stores
import {setTheme} from "@/stores/slices/user.js";

// utils
import {themeList} from "@/utils/constants.js";

const Theme = () => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.user);
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
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    }}
                >
                    {
                        themeList.map(themeItem =>
                            <Button
                                component="li"
                                key={themeItem.id}
                                variant={themeItem.value === darkMode ? "contained" : "text"}
                                color="primary"
                                startIcon={themeItem.icon}
                                fullWidth
                                onClick={() => dispatch(setTheme(themeItem.value))}
                                sx={{padding: 2}}
                            >
                                <LazyLoadImage
                                    src={themeItem.src}
                                    alt={t(themeItem.title)}
                                    width="100%"
                                    height="100%"
                                    style={{
                                        borderRadius: 8
                                    }}
                                />
                            </Button>
                        )
                    }
                </Stack>

            </Stack>

        </Container>
    )
}

export default Theme;

