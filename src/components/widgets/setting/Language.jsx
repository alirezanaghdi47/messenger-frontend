// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Button, Container, Stack, Typography} from "@mui/material";

// stores
import {setLanguage} from "@/stores/slices/profile.js";

// utils
import {languageList} from "@/utils/constants.js";

const Language = () => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.profile.setting);
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
                        {t("typography.language")}
                    </Typography>

                </Box>

                <Stack
                    component="ul"
                    direction={language === "fa" ? "row" : "row-reverse"}
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: 'center',
                        width: "100%",
                    }}
                >

                    {
                        languageList.map(languageItem =>
                            <Button
                                key={languageItem.id}
                                variant={languageItem.value === language ? "contained" : "text"}
                                color={languageItem.value === language ? "primary" : "ternary"}
                                size="large"
                                fullWidth
                                startIcon={
                                    <LazyLoadImage
                                        src={languageItem.flag}
                                        alt={languageItem.value}
                                        width={24}
                                        height={16}
                                    />
                                }
                                onClick={() => dispatch(setLanguage(languageItem.value))}
                            >
                                {t(languageItem.title)}
                            </Button>
                        )
                    }

                </Stack>

            </Stack>

        </Container>
    )
}

export default Language;

