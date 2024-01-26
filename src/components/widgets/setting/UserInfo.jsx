// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Stack, Typography} from "@mui/material";
import {FiInfo, FiPhone, FiUser} from "react-icons/fi";

const ListItem = ({label , value , icon}) => {

    const {t} = useTranslation();

    return (
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

            {icon}

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
                    {label}
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                    noWrap
                >
                    {t(value)}
                </Typography>

            </Stack>

        </Stack>
    )
}

const List = () => {

    const {userName, biography , phoneNumber} = useSelector(state => state.setting.profile);

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: "100%",
                paddingX: 2
            }}
        >

            <ListItem
                label={userName}
                value="input.userName"
                icon={<FiUser size={20}/>}
            />

            <ListItem
                label={phoneNumber}
                value="input.phoneNumber"
                icon={<FiPhone size={20}/>}
            />

            {
                biography && (
                    <ListItem
                        label={biography}
                        value="input.biography"
                        icon={<FiInfo size={20}/>}
                    />
                )
            }

        </Stack>
    )
}

const Image = () => {

    const {avatar} = useSelector(state => state.setting.profile);

    return (
        <Box
            sx={{
                position: "relative",
                width: "calc(100% + 32px)",
                height: 300,
                bgcolor: "secondary.main",
                marginTop: -2,
            }}
        >

            {
                avatar && (
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
                )
            }

        </Box>
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
            <Image/>
            <List/>
        </Stack>
    )
}

export default UserInfo;