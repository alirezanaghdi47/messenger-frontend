// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Button, Stack, Typography} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setLanguage, setSetup} from "@/stores/slices/user.js";

// utils
import {languageList} from "@/utils/constants.js";

const Language = () => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.user);
    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
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
                }}
            >

                <LazyLoadImage
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                />

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight="bold"
                >
                    {t("domain")}
                </Typography>

            </Box>

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight="bold"
            >
                {t("typography.languageMessage")}
            </Typography>

            <Stack
                component="ul"
                direction={language === "fa" ? "row" : "row-reverse"}
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
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

            <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => dispatch(setSetup("fontSize"))}
            >
                {t("button.next")}
            </Button>

        </Stack>
    )
}

export default Language;

