// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper/modules";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

// styles
import 'swiper/css';
import 'swiper/css/autoplay';

const sliderList = [
    {
        id: 1,
        title: "typography.fastTitle",
        message: "typography.fastMessage",
        image: {light: "/images/fast-light.svg", dark: "/images/fast-dark.svg"}
    },
    {
        id: 2,
        title: "typography.secureTitle",
        message: "typography.secureMessage",
        image: {light: "/images/secure-light.svg", dark: "/images/secure-dark.svg"}
    },
];

const SliderItem = ({sliderItem}) => {

    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
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
                src={darkMode ? sliderItem.image.dark : sliderItem.image.light}
                alt={sliderItem.title}
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
                {t(sliderItem.title)}
            </Typography>

            <Typography
                variant="body2"
                color="textSecondary"
                textAlign="center"
            >
                {t(sliderItem.message)}
            </Typography>

        </Stack>
    )
}

const Slider = () => {

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{delay: 1500}}
            loop
            style={{width: "100%"}}
        >

            {
                sliderList.map(sliderItem =>
                    <SwiperSlide key={sliderItem.id}>
                        <SliderItem sliderItem={sliderItem}/>
                    </SwiperSlide>
                )
            }

        </Swiper>
    )
}

export default Slider;