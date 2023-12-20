// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Card, Slider, Stack, Typography, useTheme} from "@mui/material";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {editFontSize} from "stores/slices/setting.js";

// utils
import {fontSizeList} from "utils/constants.js";

const FontSize = () => {

    const dispatch = useDispatch();
    const {fontSize} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const theme = useTheme();

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

            <Header title="typography.fontSize"/>

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
                onChange={(e, newValue) => dispatch(editFontSize({fontSize: newValue}))}
                sx={{maxWidth: 300}}
            />

        </Stack>
    )
}

export default FontSize;

