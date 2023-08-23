// libraries
import {IconButton} from "@mui/material";
import {FiChevronDown} from "react-icons/fi";

const ScrollToBottom = () => {

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
        >
            <FiChevronDown size={20}/>
        </IconButton>
    )
}

export default ScrollToBottom;

