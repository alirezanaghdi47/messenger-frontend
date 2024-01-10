// libraries
import {Stack} from "@mui/material";

// components
import Attachment from "components/widgets/chat/Attachment.jsx";
import MessageForm from "components/widgets/chat/MessageForm";

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
                borderTopWidth: 1,
                borderTopStyle: "solid",
                borderTopColor: "secondary.main",
                padding: 2
            }}
        >

            <Attachment/>

            <MessageForm/>

        </Stack>
    )
}

export default Footer;

