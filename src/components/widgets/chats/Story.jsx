// libraries
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

// styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const storyList = [
    {id: 1 , title: "علیرضا نقدی" , src: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"},
    {id: 2 , title: "علیرضا نقدی" , src: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"},
    {id: 3 , title: "علیرضا نقدی" , src: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"},
    {id: 4 , title: "علیرضا نقدی" , src: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"},
    {id: 5 , title: "علیرضا نقدی" , src: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"},
]

const Story = () =>{
    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}
        >

            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 4,
                    },
                    460: {
                        slidesPerView: 5,
                    },
                    640: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={16}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >

                {
                    storyList?.map(storyItem =>
                        <SwiperSlide
                            key={storyItem?.id}
                            style={{
                                width: "100%",
                                height: "auto",
                                cursor: "pointer"
                            }}
                        >

                            <Stack
                                direction="column"
                                gap={1}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%"
                                }}
                            >

                                <LazyLoadImage
                                    src={storyItem.src}
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    style={{borderRadius: "50%"}}
                                />

                                <Typography
                                    variant="caption"
                                    color="textPrimary"
                                    fontWeight="bold"
                                    textAlign="center"
                                    className="text-truncate"
                                    sx={{width: "100%"}}
                                >
                                    {storyItem.title}
                                </Typography>

                            </Stack>

                        </SwiperSlide>
                    )
                }

            </Swiper>

        </Stack>
    )
}

export default Story;