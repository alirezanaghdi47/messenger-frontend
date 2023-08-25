// libraries
import {Stack} from "@mui/material";

// components
import Attachment from "./Attachment.jsx";
import VoiceRecorder from "./VoiceRecorder";
import MessageForm from "./MessageForm";

const Footer = () => {

    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                position: "absolute",
                zIndex: 100,
                bottom: 0,
                left: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <VoiceRecorder/>

            <Attachment/>

            <MessageForm/>

        </Stack>
    )
}

export default Footer;

