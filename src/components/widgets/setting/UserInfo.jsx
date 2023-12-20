// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Stack, Typography} from "@mui/material";
import {FiInfo, FiUser} from "react-icons/fi";

const UserDetail = () => {

    const {avatar} = useSelector(state => state.setting.profile);

    return (
        <Box
            sx={{
                position: "relative",
                width: "calc(100% + 32px)",
                height: 360,
                bgcolor: "secondary.main",
                marginTop: -2,
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                visibleByDefault
                width="100%"
                height="100%"
                effect='blur'
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />

        </Box>
    )
}

const UserLinks = () => {

    const {userName, biography} = useSelector(state => state.setting.profile);
    const {t} = useTranslation();

    return (
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

            <Stack
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

                <FiUser size={20}/>

                <Stack
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
                        {userName}
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                        noWrap
                    >
                        {t("input.userName")}
                    </Typography>

                </Stack>

            </Stack>

            {
                biography && (
                    <Stack
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

                        <FiInfo size={20}/>

                        <Stack
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
                                {biography}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="textSecondary"
                                noWrap
                            >
                                {t("input.biography")}
                            </Typography>

                        </Stack>

                    </Stack>
                )
            }

        </Stack>
    )
}

const UserInfo = () => {

    return (
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

            <UserDetail/>

            <UserLinks/>

        </Stack>
    )
}

export default UserInfo;