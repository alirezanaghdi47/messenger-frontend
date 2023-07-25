// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
    Card
} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setColor , setActivity} from "@/stores/slices/user.js";

// utils
import {colorList} from "@/utils/constants.js";

const Color = () => {

    const dispatch = useDispatch();
    const {color} = useSelector(state => state.user.setting);
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
                        {t("typography.color")}
                    </Typography>

                    <Stack
                        direction="row"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                        }}
                    >

                        {
                            colorList.map(colorItem =>
                                <IconButton
                                    variant={colorItem.value === color ? "outlined" : "text"}
                                    size="large"
                                    color="primary"
                                    key={colorItem.id}
                                    onClick={() => dispatch(setColor(colorItem.value))}
                                >
                                    <Box
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            backgroundColor: colorItem.title,
                                            borderRadius: 1
                                        }}
                                    />
                                </IconButton>
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
                            onClick={() => dispatch(setActivity("fontSize"))}
                        >
                            {t("button.prev")}
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => dispatch(setActivity("background"))}
                        >
                            {t("button.next")}
                        </Button>

                    </Stack>

                </Stack>

            </Card>

        </Container>
    )
}

export default Color;

