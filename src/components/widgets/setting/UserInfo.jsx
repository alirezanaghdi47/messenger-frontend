// libraries
import {Stack, Typography} from "@mui/material";
import {LazyLoadImage} from "react-lazy-load-image-component";

// assets
import avatar from "@/assets/images/avatar.png";

const UserInfo = () => {

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%"
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                width={80}
                height={80}
                style={{borderRadius: "50%"}}
            />

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                }}
            >

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight='bold'
                >
                    علیرضا نقدی
                </Typography>

                <Typography
                    variant="caption"
                    color="textPrimary"
                    fontWeight='bold'
                >
                    09195610753
                </Typography>

                <Typography
                    variant="caption"
                    color="textPrimary"
                    fontWeight='bold'
                    lineHeight={2}
                >
                    Front End Engineer
                </Typography>

            </Stack>

        </Stack>
    )
}

export default UserInfo;

