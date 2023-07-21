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
} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setColor} from "@/stores/slices/account.js";
import {setCurrentPage} from "@/stores/slices/app.js";

// utils
import {colorList} from "@/utils/constants.js";

const Color = () => {

    const dispatch = useDispatch();
    const {color} = useSelector(state => state.account);
    const {t} = useTranslation();

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
                        onClick={() => dispatch(setCurrentPage({data: null , type: "fontSize"}))}
                    >
                        {t("button.prev")}
                    </Button>

                    <Button
                        variant="text"
                        color="primary"
                        fullWidth
                        onClick={() => dispatch(setCurrentPage({data: null , type: "background"}))}
                    >
                        {t("button.next")}
                    </Button>

                </Stack>

            </Stack>

        </Container>
    )
}

export default Color;

