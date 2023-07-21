// libraries
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {
    Box,
    Button,
    Card,
    Container,
    Stack,
    Typography,
} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setTheme} from "@/stores/slices/account.js";
import {removeActivePage, setActivePage} from "@/stores/slices/other.js";

// utils
import {themeList} from "@/utils/constants.js";

const Theme = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.account);
    const {t} = useTranslation();

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
                                    variant={themeItem.value === darkMode ? "contained" : "text"}
                                    color="primary"
                                    startIcon={themeItem.icon}
                                    fullWidth
                                    onClick={() => dispatch(setTheme(themeItem.value))}
                                    sx={{
                                        padding: 2
                                    }}
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
                            onClick={() => dispatch(setActivePage({data: null, type: "background"}))}
                        >
                            {t("button.prev")}
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={async () => {
                                navigate("/");
                                dispatch(removeActivePage());
                            }}
                        >
                            {t("button.finish")}
                        </Button>

                    </Stack>

                </Stack>

            </Card>

        </Container>
    )
}

export default Theme;

