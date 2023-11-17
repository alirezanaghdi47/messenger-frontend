// libraries
import {useTranslation} from "react-i18next";
import {toast} from "react-hot-toast";
import {IconButton} from "@mui/material";
import {LuMic} from "react-icons/lu";

const VoiceRecorder = () => {

    const {t} = useTranslation();

    return (
        <IconButton
            varinat="text"
            color="ternary"
            onClick={() => toast.success(t("typography.comingSoon"))}
        >
            <LuMic size={20}/>
        </IconButton>
    )
}

export default VoiceRecorder;

