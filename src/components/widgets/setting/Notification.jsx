// libraries
import {useFormik} from "formik";
import {Stack} from "@mui/material";

// components
import Alert from "@/components/widgets/setting/Alert.jsx";

// utils
import {chatList , callList} from "@/utils/constants.js";

const Notification = () => {

    const formik = useFormik({
        initialValues: {
            chat: true,
            group: false,
            status: false,
            vibrate: false,
            voiceCall: true,
            videoCall: false,
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                padding: 4,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            <Alert
                title="typography.chat"
                optionList={chatList}
            />

            <Alert
                title="typography.call"
                optionList={callList}
            />

        </Stack>
    )
}

export default Notification;

