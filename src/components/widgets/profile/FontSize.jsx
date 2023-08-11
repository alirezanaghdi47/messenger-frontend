// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container , Box, Card, Slider, Stack, Typography, useTheme} from "@mui/material";

// stores
import {setFontSize} from "@/stores/slices/profile.js";

// utils
import {fontSizeList} from "@/utils/constants.js";

const FontSize = () => {

    const dispatch = useDispatch();
    const {fontSize} = useSelector(state => state.profile.setting);
    const theme = useTheme();
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
                        {t("typography.fontSize")}
                    </Typography>

                </Box>

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

            </Stack>

        </Container>
    )
}

export default FontSize;

