// libraries
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setTheme} from "@/stores/slices/account.js";
import {setCurrentPage, unSetCurrentPage} from "@/stores/slices/app.js";

// utils
import {themeList} from "@/utils/constants.js";

const Theme = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.account);
    const {t} = useTranslation();

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
                    {t("typography.theme")}
                </Typography>

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    }}
                >
                    {
                        themeList.map(themeItem =>
                            <Button
                                key={themeItem.id}
                                variant={themeItem.value === darkMode ? "contained" : "outlined"}
                                color="primary"
                                startIcon={themeItem.icon}
                                fullWidth
                                onClick={() => dispatch(setTheme(themeItem.value))}
                            >
                                {t(themeItem.title)}
                            </Button>
                        )
                    }
                </Stack>

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    }}
                >

                    <Button
                        variant="text"
                        color="primary"
                        fullWidth
                        onClick={() => dispatch(setCurrentPage({data: null, type: "background"}))}
                    >
                        {t("button.prev")}
                    </Button>

                    <Button
                        variant="text"
                        color="primary"
                        fullWidth
                        onClick={async () => {
                            navigate("/");
                            dispatch(unSetCurrentPage());
                        }}
                    >
                        {t("button.finish")}
                    </Button>

                </Stack>

            </Stack>

        </Container>
    )
}

export default Theme;

