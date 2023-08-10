// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container , Box, Stack, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';

// stores
import {setBackground} from "@/stores/slices/user.js";

// utils
import {backgroundList} from "@/utils/constants.js";

const Background = () => {

    const dispatch = useDispatch();
    const {background} = useSelector(state => state.user);
    const {t} = useTranslation();
    const isDesktop = useMediaQuery('(max-width: 992px)');
    const isTablet = useMediaQuery('(min-width: 768px)');

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
                        {t("typography.background")}
                    </Typography>

                </Box>

                <Swiper
                    dir="ltr"
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
                    loop={true}
                    initialSlide={backgroundList.find(backgroundItem => backgroundItem.background.desktop === background.desktop).id - 1}
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
                                    src={isTablet ? backgroundItem.background.desktop : backgroundItem.background.mobile}
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

            </Stack>

        </Container>
    )
}

export default Background;

