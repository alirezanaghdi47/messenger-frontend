// libraries
import {useSelector} from "react-redux";
import {IconButton} from "@mui/material";
import {FiChevronDown} from "react-icons/fi";

const ScrollBottom = ({messagesCount, listRef}) => {

    const {darkMode} = useSelector(state => state.setting.appearance);

    const _handleScrollToLastMessage = () => {
        listRef?.current?.scrollToIndex({
            index: messagesCount,
            align: "bottom",
            behavior: "auto"
        });
    }

    return (
        // <Grow in={showScrollBottom}>

            <IconButton
                variant="contained"
                color={darkMode ? "dark" : "light"}
                size="large"
                sx={{
                    position: 'absolute',
                    zIndex: 25,
                    left: 16,
                    bottom: 96
                }}
                onClick={_handleScrollToLastMessage}
            >
                <FiChevronDown size={20}/>
            </IconButton>

        // </Grow>
    )
}

export default ScrollBottom;

