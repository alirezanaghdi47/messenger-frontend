// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {
    Box,
    Button,
    Card,
    Container,
    FormControl,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";
import {FiChevronDown} from "react-icons/fi";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setLanguage , setActivity} from "@/stores/slices/user.js";

// utils
import {languageList} from "@/utils/constants.js";

const Language = () => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.user.setting);
    const {t, i18n} = useTranslation();

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: "100dvh",
            }}
        >

            <Card
                sx={{
                    width: "100%",
                    padding: 4
                }}
            >

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
                        {t("typography.language")}
                    </Typography>

                    <FormControl
                        fullWidth
                        size="small"
                    >

                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            fontWeight="bold"
                        >
                            {i18n.language === "fa" ? "زبان" : "Language"}
                        </Typography>

                        <Select
                            value={language}
                            label={i18n.language === "fa" ? "زبان" : "Language"}
                            onChange={(e) => dispatch(setLanguage(e.target.value))}
                            IconComponent={FiChevronDown}
                        >
                            {
                                languageList.map(languageItem =>
                                    <MenuItem
                                        key={languageItem.id}
                                        value={languageItem.value}
                                    >
                                        {t(languageItem.title)}
                                    </MenuItem>
                                )
                            }
                        </Select>

                    </FormControl>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => dispatch(setActivity("fontSize"))}
                    >
                        {t("button.next")}
                    </Button>

                </Stack>

            </Card>

        </Container>
    )
}

export default Language;

