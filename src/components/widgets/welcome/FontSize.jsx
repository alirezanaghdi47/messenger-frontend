// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {
    Button,
    Card,
    Container,
    Slider,
    Stack,
    Typography,
    useTheme
} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setSize} from "@/stores/slices/account.js";
import {setCurrentPage} from "@/stores/slices/app.js";

// utils
import {fontSizeList} from "@/utils/constants.js";

const FontSize = () => {

    const dispatch = useDispatch();
    const {fontSize} = useSelector(state => state.account);
    const {t} = useTranslation();
    const theme = useTheme();

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
                    {t("typography.fontSize")}
                </Typography>

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        width: "100%"
                    }}
                >

                    <Card
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            maxWidth: "45%",
                            bgcolor: "primary.main",
                            padding: 2
                        }}
                    >

                        <Typography
                            variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                            color={theme.palette.getContrastText(theme.palette.primary.main)}
                            fontWeight="bold"
                        >
                            {t("typography.first_message")}
                        </Typography>

                    </Card>

                    <Card
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                            maxWidth: "45%",
                            marginTop: 4,
                            padding: 2,
                        }}
                    >

                        <Typography
                            variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                            color="textPrimary"
                            fontWeight="bold"
                        >
                            {t("typography.second_message")}
                        </Typography>

                    </Card>

                </Stack>

                <Slider
                    value={fontSize}
                    valueLabelDisplay="auto"
                    step={2}
                    marks
                    min={12}
                    max={20}
                    onChange={(e, newValue) => dispatch(setSize(newValue))}
                />

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
                        onClick={() => dispatch(setCurrentPage({data: null , type: "language"}))}
                    >
                        {t("button.prev")}
                    </Button>

                    <Button
                        variant="text"
                        color="primary"
                        fullWidth
                        onClick={() => dispatch(setCurrentPage({data: null , type: "color"}))}
                    >
                        {t("button.next")}
                    </Button>

                </Stack>

            </Stack>

        </Container>
    )
}

export default FontSize;

