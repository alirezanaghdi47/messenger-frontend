// libraries
import {useState} from "react";
import {useSelector} from "react-redux";
import {Card, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {FaPlay} from "react-icons/fa";
import {BiCheckDouble} from "react-icons/bi";
import {FiX} from "react-icons/fi";

// utils
import {convertByte} from "../../../../utils/functions";

const MusicModal = ({isOpen , onClose}) => {

    const theme = useTheme();

    return isOpen && (
        <Stack
            direction="row"
            gap={2}
            sx={{
                position: "absolute",
                top: 80,
                left: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 60,
                bgcolor: "background.paper",
                borderRadius: 0,
                boxShadow: 3,
                padding: 2,
            }}
        >

            <IconButton
                variant="text"
                color="error"
                onClick={onClose}
            >
                <FiX size={20}/>
            </IconButton>

            <Typography
                variant="body2"
                color="textPrimary"
                fontWeight="bold"
            >
                11:11
            </Typography>

            <IconButton
                variant="text"
                color="ternary"
            >
                <FaPlay size={16}/>
            </IconButton>

        </Stack>
    )
}

const MusicMessage = ({message}) => {

    const {fontSize, language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    const [showModal , setShowModal] = useState(false);

    return (
        <>

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    bgcolor: message.me ? "primary.light" : "background.default",
                    padding: 1.5,
                }}
            >

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

                    <IconButton
                        variant="contained"
                        color={message.me ? "primary" : "secondary"}
                        size="large"
                        sx={{order: language === "fa" ? 2 : 1}}
                        onClick={() => setShowModal(true)}
                    >
                        <FaPlay size={20}/>
                    </IconButton>

                    <Stack
                        direction="column"
                        gap={1}
                        sx={{
                            order: language === "fa" ? 1 : 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: language === "fa" ? "end" : "start",
                            width: 150,
                        }}
                    >

                        <Typography
                            variant="caption"
                            color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        >
                            00:10 / 00:00
                        </Typography>

                        <Typography
                            variant="caption"
                            color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        >
                            {convertByte(300000)}
                        </Typography>

                    </Stack>

                </Stack>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

            <MusicModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}

export default MusicMessage;