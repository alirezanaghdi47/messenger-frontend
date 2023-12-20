// libraries
import {useSelector} from "react-redux";
import {formatDistance, formatDistanceToNow} from "date-fns";
import {faIR, enUS} from 'date-fns/locale';
import {Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {LuGlobe2, LuMapPin} from "react-icons/lu";
import {CgBrowser} from "react-icons/cg";

const LoginHistoryItem = ({loginHistoryItem}) => {

    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                paddingY: 2,
                "&:last-of-type": {
                    borderBottom: "none"
                }
            }}
        >

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    height: "100%"
                }}
            >

                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <CgBrowser size={20}/>

                    <Typography
                        variant="body2"
                        color="textPrimary"
                    >
                        {loginHistoryItem.ip}
                    </Typography>

                </Stack>

                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <LuGlobe2 size={20}/>

                    <Typography
                        variant="body2"
                        color="textPrimary"
                    >
                        {loginHistoryItem.browser}
                    </Typography>

                </Stack>

                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <LuMapPin size={20}/>

                    <Typography
                        variant="body2"
                        color="textPrimary"
                    >
                        {loginHistoryItem.city} , {loginHistoryItem.country}
                    </Typography>

                </Stack>

            </Stack>

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                    height: "100%",
                    marginLeft: "auto"
                }}
            >

                <Typography
                    variant="caption"
                    color="textPrimary"
                    marginTop="auto"
                >
                    {
                        formatDistanceToNow(new Date(loginHistoryItem.createdAt), {
                                addSuffix: true,
                                locale: language === "en" ? enUS : faIR
                            }
                        )
                    }
                </Typography>

            </Stack>

        </Stack>
    )
}

const LoginHistory = ({loginHistories}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="ul"
            direction="column"
            className="custom-scrollbar"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: isTablet ? "calc(100dvh - 80px)" : 480,
                overflowY: "scroll"
            }}
        >

            {
                loginHistories.map(loginHistoryItem =>
                    <LoginHistoryItem
                        key={loginHistoryItem?._id}
                        loginHistoryItem={loginHistoryItem}
                    />
                )
            }

        </Stack>
    )
}

export default LoginHistory;

