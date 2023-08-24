// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Box, Stack, Typography} from "@mui/material";

// stores
import {setColor} from "../../../stores/slices/setting.js";

// utils
import {colorList} from "../../../utils/constants.js";

const Color = () => {

    const dispatch = useDispatch();
    const {darkMode , color} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
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
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight='bold'
                >
                    {t("typography.color")}
                </Typography>

            </Box>

            <Stack
                component="ul"
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                {
                    colorList.map((colorItem, index) =>
                        <Box
                            key={colorItem.id}
                            component="li"
                            sx={{
                                opacity: color.dark === colorItem.color.dark ? 1: 0.5,
                                width: 40,
                                height: 40,
                                background: darkMode ? colorItem.color.dark : colorItem.color.light,
                                borderRadius: "50%",
                                cursor: "pointer",
                            }}
                            onClick={() => dispatch(setColor(index))}
                        />
                    )
                }

            </Stack>

        </Stack>
    )
}

export default Color;

