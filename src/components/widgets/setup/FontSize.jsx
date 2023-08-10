// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {
    Box,
    Button,
    Slider,
    Stack,
    Card,
    Typography,
    useTheme
} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setFontSize , setSetup} from "@/stores/slices/user.js";

// utils
import {fontSizeList} from "@/utils/constants.js";

const FontSize = () => {

    const dispatch = useDispatch();
    const {fontSize} = useSelector(state => state.user);
    const {t} = useTranslation();
    const theme = useTheme();

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
                {t("typography.fontSizeMessage")}
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
                        padding: 1
                    }}
                >

                    <Typography
                        variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                        color={theme.palette.getContrastText(theme.palette.primary.main)}
                        fontWeight="bold"
                    >
                        {t("typography.firstMessage")}
                    </Typography>

                </Card>

                <Card
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        maxWidth: "45%",
                        bgcolor: "background.default",
                        marginTop: 4,
                        padding: 1,
                    }}
                >

                    <Typography
                        variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                        color="textPrimary"
                        fontWeight="bold"
                    >
                        {t("typography.secondMessage")}
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
                onChange={(e, newValue) => dispatch(setFontSize(newValue))}
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
                    onClick={() => dispatch(setSetup("language"))}
                >
                    {t("button.prev")}
                </Button>

                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => dispatch(setSetup("color"))}
                >
                    {t("button.next")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default FontSize;

