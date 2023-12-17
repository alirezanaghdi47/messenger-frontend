// libraries
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper/modules";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Button, IconButton, Stack, Typography} from "@mui/material";

// styles
import 'swiper/css';
import 'swiper/css/autoplay';
import {useSelector} from "react-redux";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

const slideList = [
    {id: 1, title: "typography.fastTitle", message: "typography.fastMessage", image: {light: "/images/fast-light.svg" , dark: "/images/fast-dark.svg"}},
    {id: 2, title: "typography.secureTitle", message: "typography.secureMessage", image: {light: "/images/secure-light.svg" , dark: "/images/secure-dark.svg"}},
];

const Intro = ({onNext}) => {

    const {darkMode , language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}
        >

            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                autoplay={{delay: 1500}}
                style={{width: "100%"}}
            >

                {
                    slideList.map(slideItem =>

                        <SwiperSlide key={slideItem.id}>

                            <Stack
                                direction="column"
                                gap={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >

                                <LazyLoadImage
                                    src={darkMode ? slideItem.image.dark : slideItem.image.light}
                                    alt={slideItem.title}
                                    visibleByDefault
                                    effect="blur"
                                    width="100%"
                                    style={{height: 200}}
                                />

                                <Typography
                                    variant="h6"
                                    color="textPrimary"
                                    fontWeight='bold'
                                >
                                    {t(slideItem.title)}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    textAlign="center"
                                >
                                    {t(slideItem.message)}
                                </Typography>

                            </Stack>

                        </SwiperSlide>
                    )
                }

            </Swiper>

            <Button
                variant="contained"
                color="primary"
                startIcon={language === "fa" ? <LuChevronRight size={20}/> : <LuChevronLeft size={20}/>}
                onClick={onNext}
            >
                {t("button.signIn")}
            </Button>

        </Stack>
    )
}

export default Intro;