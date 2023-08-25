// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Box, Card, Slider, Stack, Typography, useTheme} from "@mui/material";

// stores
import {setFontSize} from "../../../stores/slices/setting.js";

// utils
import {fontSizeList} from "../../../utils/constants.js";

const FontSize = () => {

    const dispatch = useDispatch();
    const {fontSize} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const theme = useTheme();

    const _handleActiveFontSize = (value) => {
        dispatch(setFontSize(value))
    }

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
                    {t("typography.fontSize")}
                </Typography>

            </Box>

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
                    {t("typography.exampleMessage")}
                </Typography>

            </Card>

            <Slider
                value={fontSize}
                valueLabelDisplay="auto"
                step={2}
                marks
                min={12}
                max={20}
                onChange={(e, newValue) => _handleActiveFontSize(newValue)}
                sx={{maxWidth: 300}}
            />

        </Stack>
    )
}

export default FontSize;

