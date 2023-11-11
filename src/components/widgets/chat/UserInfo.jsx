// libraries
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";

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

            <img
                src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
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
                >
                    {t("typography.lastSeen")}
                    &nbsp;
                    11:11
                </Typography>

            </Stack>

        </Stack>
    )
}

export default UserInfo;