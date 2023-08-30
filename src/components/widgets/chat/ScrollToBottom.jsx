// libraries
import {forwardRef} from "react";
import {IconButton} from "@mui/material";
import {FiChevronDown} from "react-icons/fi";

const ScrollToBottom = forwardRef((props, ref) => {

    const _handleScrollToBottom = () => {
        ref?.current?.lastElementChild.scrollIntoView({behavior: "smooth"});
    }

    return (
        <IconButton
            variant="contained"
            color="secondary"
            size="large"
            sx={{
                position: 'absolute',
                zIndex: 25,
                left: 16,
                bottom: 88,
                boxShadow: 3
            }}
            onClick={_handleScrollToBottom}
        >
            <FiChevronDown size={20}/>
        </IconButton>
    )
});

export default ScrollToBottom;

