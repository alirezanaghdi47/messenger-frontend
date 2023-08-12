// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IconButton, Stack, Typography} from "@mui/material";
import {FiChevronLeft, FiChevronRight, FiInfo, FiPhone} from "react-icons/fi";

// assets
import avatar from "@/assets/images/avatar.png";

// stores
import {removeActiveProfile} from "@/stores/slices/profile.js";

const previewList = [
    {id: 1 ,title: "typography.phoneNumber", value: "09195610753" , icon: <FiPhone size={24}/>},
    {id: 2 ,title: "typography.biography", value: "Front End Developer" , icon: <FiInfo size={24}/>},
];

const Preview = () => {

    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {language} = useSelector(state => state.profile.setting);

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                style={{
                    width: "calc(100% + 32px)",
                    maxHeight: "250px",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "brightness(50%)",
                    marginTop: "-16px"
                }}
            />

            <IconButton
                variant="text"
                color="secondary"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
                onClick={() => dispatch(removeActiveProfile())}
            >
                {language === "fa" ? <FiChevronRight size={24}/> : <FiChevronLeft size={24}/>}
            </IconButton>

            <Stack
                direction="column"
                gap={1}
                sx={{
                    position: 'absolute',
                    top: 160,
                    left: 16,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start"
                }}
            >

                <Typography
                    variant="subtitle1"
                    color="secondary.main"
                    fontWeight='bold'
                    noWrap
                >
                    علیرضا نقدی
                </Typography>

                <Typography
                    variant="caption"
                    color="secondary.main"
                >
                    {t("typography.lastSeen")} 11:11
                </Typography>

            </Stack>

            <Stack
                direction="column"
                gap={3}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%"
                }}
            >

                {
                    previewList.map(previewItem =>
                        <Stack
                            key={previewItem.id}
                            direction="row"
                            gap={3}
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                                width: "100%",
                                color: "ternary.main"
                            }}
                        >

                            {previewItem.icon}

                            <Stack
                                key={previewItem.id}
                                direction="column"
                                gap={1}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "start",
                                    width: "100%",
                                }}
                            >

                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                    fontWeight='bold'
                                    noWrap
                                >
                                    {previewItem.value}
                                </Typography>

                                <Typography
                                    variant="caption"
                                    color="textSecondary"
                                    fontWeight='bold'
                                    noWrap
                                >
                                    {t(previewItem.title)}
                                </Typography>

                            </Stack>

                        </Stack>
                    )
                }

            </Stack>

        </Stack>
    )
}

export default Preview;