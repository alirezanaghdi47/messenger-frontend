// libraries
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

// assets
import avatar from "@/assets/images/avatar.png";

const UserInfo = () => {

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
                width={20}
                height={20}
                style={{borderRadius: "50%"}}
            />

            <Typography
                variant="subtitle2"
                color="textPrimary"
                fontWeight='bold'
                noWrap
            >
                علیرضا نقدی
            </Typography>

        </Stack>
    )
}

export default UserInfo;