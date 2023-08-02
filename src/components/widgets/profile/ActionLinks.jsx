// libraries
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Box, Button, Stack} from "@mui/material";
import {FiLogOut} from "react-icons/fi";

// components
import UserInfo from "@/components/widgets/profile/UserInfo.jsx";

const ActionLinks = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <Stack
            component="ul"
            direction="column"
            gap={1}
            sx={{width: "100%"}}
        >

            <Box component="li">
                <UserInfo
                    width={20}
                    height={20}
                    lastSeen
                    isOnline
                />
            </Box>

            <Box component="li">

                <Button
                    variant="text"
                    color="secondary"
                    fullWidth
                    startIcon={<FiLogOut size={20}/>}
                    sx={{justifyContent: "start"}}
                    onClick={() => navigate("/auth/login")}
                >
                    {t("button.logout")}
                </Button>

            </Box>

        </Stack>
    )
}

export default ActionLinks;

