// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {
    Button,
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
import {setLanguage} from "@/stores/slices/account.js";
import {setCurrentPage} from "@/stores/slices/app.js";

// utils
import {languageList} from "@/utils/constants.js";

const Language = () => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.account);
    const {t, i18n} = useTranslation();

    return (
        <Container
            maxWidth="xs"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: "100dvh",
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
                    padding: 2
                }}
            >

                <LazyLoadImage
                    src={logo}
                    alt="logo"
                    width={80}
                    height={60}
                />

                <Typography
                    variant="h6"
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
                    variant="text"
                    color="primary"
                    fullWidth
                    onClick={() => dispatch(setCurrentPage({data: null, type: "fontSize"}))}
                >
                    {t("button.next")}
                </Button>

            </Stack>

        </Container>
    )
}

export default Language;

