// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Box, Stack, Typography, Grid} from "@mui/material";

// stores
import {setBackground} from "@/stores/slices/profile.js";

// utils
import {backgroundList} from "@/utils/constants.js";

const Background = () => {

    const dispatch = useDispatch();
    const {background , darkMode} = useSelector(state => state.profile.setting);
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
                        variant="subtitle1"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("typography.background")}
                    </Typography>

                </Box>

                <Stack
                    component="ul"
                    direction="row"
                    flexWrap="wrap"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%"
                    }}
                >
                    {
                        backgroundList.map((backgroundItem , index) =>
                            <Box
                                component="li"
                                key={backgroundItem.id}
                                sx={{
                                    position: "relative",
                                    width: "25%",
                                    minWidth: 200,
                                    borderRadius: "50%",
                                    cursor:"pointer",
                                    "&::after":{
                                        content: backgroundItem.background === background ? "'x'" : '""',
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50% , -50%)",
                                        color: darkMode ? "ternary.main" : "secondary.main",
                                    }
                                }}
                                onClick={() => dispatch(setBackground(index))}
                            >
                                <LazyLoadImage
                                    alt={backgroundItem.id}
                                    src={backgroundItem.background}
                                    width="100%"
                                    height="100%"
                                    effect="fade"
                                    style={{
                                        borderRadius: 8,
                                        objectFit: "cover"
                                    }}
                                />
                            </Box>
                        )
                    }

                </Stack>

            </Stack>

        </Container>
    )
}

export default Background;

