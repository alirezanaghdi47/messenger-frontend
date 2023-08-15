// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {FiEdit2, FiInfo, FiPhone, FiUser} from "react-icons/fi";

// assets
import avatar from "@/assets/images/avatar.png";

// stores
import {setActiveSetting} from "@/stores/slices/setting.js";

const previewList = [
    {id: 1 ,title: "typography.userName", value: "alirezanaghdi47" , icon: <FiUser size={24}/>},
    {id: 2 ,title: "typography.phoneNumber", value: "09195610753" , icon: <FiPhone size={24}/>},
    {id: 3 ,title: "typography.biography", value: "Front End Developer" , icon: <FiInfo size={24}/>},
];

const UserInfo = () => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.profile.setting);
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

            <Box
                sx={{
                    position: "relative",
                    width: "calc(100% + 32px)",
                    marginTop: "-16px"
                }}
            >

                <IconButton
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        position: 'absolute',
                        zIndex: 10,
                        bottom: -22,
                        right: 16,
                    }}
                    onClick={() => dispatch(setActiveSetting("profile"))}
                >
                    <FiEdit2 size={20}/>
                </IconButton>

                <LazyLoadImage
                    src={avatar}
                    alt="avatar"
                    style={{
                        width: "100%",
                        maxHeight: "250px",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "start",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #000 100%)",
                        padding: 2
                    }}
                >

                    <Typography
                        variant="subtitle1"
                        color={darkMode ? "ternary.main" : "secondary.main"}
                        fontWeight='bold'
                        noWrap
                    >
                        علیرضا نقدی
                    </Typography>

                    <Typography
                        variant="caption"
                        color={darkMode ? "ternary.main" : "secondary.main"}
                    >
                        {t("typography.lastSeen")} 11:11
                    </Typography>

                </Stack>

            </Box>

            <Stack
                direction="column"
                gap={2}
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
                            gap={2}
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

export default UserInfo;