// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Button, Container, Stack, Typography} from "@mui/material";

// stores
import {setKeyboard} from "@/stores/slices/profile.js";

// utils
import {keyboardList} from "@/utils/constants.js";

const Keyboard = () => {

    const dispatch = useDispatch();
    const {keyboard} = useSelector(state => state.profile.setting);
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
                        {t("typography.keyboard")}
                    </Typography>

                </Box>

                <Stack
                    component="ul"
                    direction={"row"}
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: 'center',
                        width: "100%",
                    }}
                >

                    {
                        keyboardList.map(keyboardItem =>
                            <Button
                                key={keyboardItem.id}
                                variant={keyboardItem.value === keyboard ? "contained" : "text"}
                                color={keyboardItem.value === keyboard ? "primary" : "ternary"}
                                onClick={() => dispatch(setKeyboard(keyboardItem.value))}
                            >
                                {t(keyboardItem.title)}
                            </Button>
                        )
                    }

                </Stack>

            </Stack>

        </Container>
    )
}

export default Keyboard;

