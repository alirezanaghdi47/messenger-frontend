// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useAudioRecorder} from "react-audio-voice-recorder";
import {Box, Button, IconButton, Stack, Typography} from "@mui/material";
import {FiSend, FiX} from "react-icons/fi";
import {FaCircle} from "react-icons/fa6";

// utils
import {formattedSecond} from "utils/functions";

const VoiceRecorderPopup = ({isOpen, onClose}) => {

    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const {
        startRecording,
        stopRecording,
        isRecording,
        recordingTime,
        recordingBlob,
    } = useAudioRecorder();

    return isOpen && (
        <Stack
            direction="row"
            gap={2}
            sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                borderRadius: 0,
                padding: 2,
            }}
        >

            <IconButton
                color="error"
                onClick={() => {
                    stopRecording();
                    onClose();
                }}
            >
                <FiX size={20}/>
            </IconButton>

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                {
                    isRecording ? (
                        <Box
                            sx={{
                                direction: language === "fa" ? "rtl" : "ltr",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap:1,
                            }}
                        >

                            <Box
                                sx={{
                                    width: 12,
                                    height: 12,
                                    bgcolor: "error.main",
                                    borderRadius: "50%"
                                }}
                            />

                            <Typography
                                variant="body2"
                                color="textPrimary"
                                fontWeight="bold"
                            >
                                {formattedSecond(recordingTime)}
                            </Typography>

                        </Box>
                    ) : (
                        <Button
                            variant="text"
                            color="ternary"
                            startIcon={<FaCircle size={16}/>}
                            onClick={startRecording}
                        >
                            {t("button.record")}
                        </Button>
                    )
                }

            </Stack>

            <IconButton
                color="primary"
                onClick={() => {
                    stopRecording();
                    setTimeout(() => {
                        console.log(recordingBlob);
                    } , 1000)
                }}
            >
                <FiSend size={20}/>
            </IconButton>

        </Stack>
    )
}

export default VoiceRecorderPopup;