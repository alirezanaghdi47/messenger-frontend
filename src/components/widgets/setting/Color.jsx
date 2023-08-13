// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Box, Stack, Typography, IconButton} from "@mui/material";

// stores
import {setColor} from "@/stores/slices/profile.js";

// utils
import {colorList} from "@/utils/constants.js";

const Color = () => {

    const dispatch = useDispatch();
    const {color , darkMode} = useSelector(state => state.profile.setting);
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
                        {t("typography.color")}
                    </Typography>

                </Box>

                <Stack
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
                            <IconButton
                                key={colorItem.id}
                                variant={colorItem.color.dark === color.dark ? "contained" : "text"}
                                color={colorItem.color.dark === color.dark ? "primary" : "ternary"}
                                onClick={() => dispatch(setColor(index))}
                            >
                                <Box
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        background: darkMode ? colorItem.color.dark : colorItem.color.light,
                                        borderRadius: "50%",
                                    }}
                                />
                            </IconButton>
                        )
                    }

                </Stack>

            </Stack>

        </Container>
    )
}

export default Color;

