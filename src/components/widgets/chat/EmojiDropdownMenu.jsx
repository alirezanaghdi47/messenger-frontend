// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {EmojiKeyboard} from "reactjs-emoji-keyboard";
import {Box, Grow} from "@mui/material";

// utils
import {convertCodePointToEmoji} from "utils/functions";

const EmojiDropdownMenu = ({anchorEl, isOpen, onClose , message , setMessage}) => {

    const {language , darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const _handleEmojiSelect = (emoji) => {
        setMessage(message + convertCodePointToEmoji(emoji.codePoint));
        onClose();
    }

    return (
        <Grow
            in={isOpen}
            style={{transformOrigin: language === "fa" ? 'bottom right' : 'bottom left'}}
        >

            <Box
                sx={{
                    position: "absolute",
                    zIndex: 300,
                    bottom: 36,
                    left: 0,
                }}
            >

                <EmojiKeyboard
                    width={240}
                    height={210}
                    theme={darkMode ? "dark" : "light"}
                    searchLabel={t("input.search")}
                    searchDisabled={true}
                    onEmojiSelect={(emoji) => _handleEmojiSelect(emoji)}
                    categoryDisabled={true}
                />

            </Box>

        </Grow>
    )
}

export default EmojiDropdownMenu;

