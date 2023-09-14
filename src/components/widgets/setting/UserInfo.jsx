// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Stack, Typography} from "@mui/material";
import {FiInfo, FiPhone, FiUser} from "react-icons/fi";

const userInfoList = [
    {id: 1 ,title: "input.userName", value: "alirezanaghdi47" , icon: <FiUser size={20}/>},
    {id: 2 ,title: "input.phoneNumber", value: "09195610753" , icon: <FiPhone size={20}/>},
    {id: 3 ,title: "input.biography", value: "Front End Developer" , icon: <FiInfo size={20}/>},
];

const UserDetail = () => {

    return (
        <Box
            sx={{
                position: "relative",
                width: "calc(100% + 32px)",
                height: 250,
                marginTop: -2,
            }}
        >

            <LazyLoadImage
                src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                alt="avatar"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />

        </Box>
    )
}

const UserLinks = () => {

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

            {
                userInfoList.map(userInfoItem =>
                    <Stack
                        key={userInfoItem.id}
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

                        {userInfoItem.icon}

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
                                {userInfoItem.value}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="textSecondary"
                                noWrap
                            >
                                {t(userInfoItem.title)}
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