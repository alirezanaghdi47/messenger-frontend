// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Button, Card, Container, Stack, Typography,} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow} from "swiper/modules";
import {useMediaQuery} from "@react-hooks-library/core";
import 'swiper/css';
import 'swiper/css/effect-cards';

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setBackground} from "@/stores/slices/account.js";
import {setActivePage} from "@/stores/slices/other.js";

// utils
import {backgroundList} from "@/utils/constants.js";

const Background = () => {

    const dispatch = useDispatch();
    const {background, language} = useSelector(state => state.account);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(min-width: 768px)');

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
                        {t("typography.background")}
                    </Typography>

                    <Swiper
                        dir={language === "fa" ? "rtl" : "ltr"}
                        modules={[EffectCoverflow]}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 16,
                            modifier: 16,
                            slideShadows: false
                        }}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        spaceBetween={16}
                        allowTouchMove={true}
                        draggable={true}
                        initialSlide={backgroundList.find(backgroundItem => backgroundItem.src.desktop === background.desktop).id - 1}
                        onSlideChange={(swiper) => dispatch(setBackground(swiper.activeIndex || 0))}
                    >

                        {
                            backgroundList.map(backgroundItem =>
                                <SwiperSlide
                                    key={backgroundItem.id}
                                    style={{width: isTablet ? "100%" : "50%"}}
                                >
                                    <LazyLoadImage
                                        alt={backgroundItem.id}
                                        src={isTablet ? backgroundItem.src.desktop : backgroundItem.src.mobile}
                                        width="100%"
                                        height="100%"
                                        effect="fade"
                                        style={{
                                            borderRadius: 8,
                                            objectFit: "cover"
                                        }}
                                    />
                                </SwiperSlide>
                            )
                        }

                    </Swiper>

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
                            onClick={() => dispatch(setActivePage({data: null , type: "color"}))}
                        >
                            {t("button.prev")}
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => dispatch(setActivePage({data: null , type: "theme"}))}
                        >
                            {t("button.next")}
                        </Button>

                    </Stack>

                </Stack>

            </Card>

        </Container>
    )
}

export default Background;

