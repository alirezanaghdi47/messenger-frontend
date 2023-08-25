// libraries
import {useState} from "react";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton} from "@mui/material";
import {FiPlus} from "react-icons/fi";

// components
import AddChatDropdown from "./AddChatDropdown";

const AddChat = () => {

    const isDesktop = useMediaQuery('(max-width: 992px)');

    const [anchorEl, setAnchorEl] = useState(null);

    const _handleShowDropdown = (e) => setAnchorEl(e.currentTarget);
    const _handleHideDropdown = (e) => setAnchorEl(null);

    return (
        <>

            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={_handleShowDropdown}
                sx={{
                    position: 'absolute',
                    zIndex: 25,
                    left: isDesktop ? "calc(100% - 60px)" : "calc(360px - 60px)",
                    bottom: 16
                }}
            >
                <FiPlus size={20}/>
            </IconButton>

            <AddChatDropdown
                anchorEl={anchorEl}
                isOpen={Boolean(anchorEl)}
                onClose={_handleHideDropdown}
            />

        </>
    )
}

export default AddChat;

