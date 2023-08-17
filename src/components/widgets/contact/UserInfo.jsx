// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

// assets
import avatar from "@/assets/images/avatar.png";

const UserInfo = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "max-content",
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
                style={{borderRadius: "50%"}}
            />

            <Stack
                direction="column"
                gap={0.5}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start"
                }}
            >

                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    fontWeight='bold'
                    noWrap
                >
                    علیرضا نقدی
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                    noWrap
                    gutterBottom
                >
                    {t("typography.lastSeen")}
                    &nbsp;
                    11:11
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                    noWrap
                >
                    Front End Developer
                </Typography>

            </Stack>

        </Stack>
    )
}

export default UserInfo;