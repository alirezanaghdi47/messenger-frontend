// libraries
import {useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Stack, Typography} from "@mui/material";
import 'swiper/css';
import 'swiper/css/effect-cards';

// assets
import avatar from "@/assets/images/avatar.png";

const storyList = [
    {_id: "1", userName: "علیرضا نقدی" , image: avatar},
    {_id: "2", userName: "علیرضا نقدی" , image: avatar},
    {_id: "3", userName: "علیرضا نقدی" , image: avatar},
    {_id: "4", userName: "علیرضا نقدی" , image: avatar},
    {_id: "5", userName: "علیرضا نقدی" , image: avatar},
    {_id: "6", userName: "علیرضا نقدی" , image: avatar},
    {_id: "7", userName: "علیرضا نقدی" , image: avatar},
    {_id: "8", userName: "علیرضا نقدی" , image: avatar},
];

const Stories = () => {

    const {language} = useSelector(state => state.user);

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Swiper
                dir={language === "fa" ? "rtl" : "ltr"}
                grabCursor={true}
                spaceBetween={16}
                allowTouchMove={true}
                draggable={true}
                breakpoints={{
                    320: {slidesPerView: 4},
                    576: {slidesPerView: 5},
                    768: {slidesPerView: 6},
                    992: {slidesPerView: 4},
                }}
            >

                {
                    storyList.map(storyItem =>
                        <SwiperSlide
                            key={storyItem._id}
                            style={{
                                display: "flex",
                                gap: 8,
                                flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: "center",
                            }}
                        >

                            <LazyLoadImage
                                alt={storyItem._id}
                                src={storyItem.image}
                                width={50}
                                height={50}
                                effect="fade"
                                style={{
                                    borderRadius: "50%",
                                    objectFit: "cover"
                                }}
                            />

                            <Typography
                                variant="caption"
                                fontWeight="bold"
                                textAlign="center"
                                noWrap
                            >
                                {storyItem.userName}
                            </Typography>

                        </SwiperSlide>
                    )
                }

            </Swiper>

        </Stack>
    )
}

export default Stories;

