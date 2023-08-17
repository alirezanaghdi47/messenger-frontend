// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Button, Stack, Typography} from "@mui/material";

// stores
import {setLanguage} from "@/stores/slices/setting.js";

// utils
import {languageList} from "@/utils/constants.js";

const Language = () => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.setting.appearance);
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
                    variant="subtitle1"
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
    )
}

export default Language;

