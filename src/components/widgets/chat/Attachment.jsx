// libraries
import {useState} from "react";
import {IconButton} from "@mui/material";
import {LuPaperclip} from "react-icons/lu";

// components
import AttachmentDropdown from "./AttachmentDropdown";

const Attachment = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const _handleShowDropdown = (e) => setAnchorEl(e.currentTarget);
    const _handleHideDropdown = (e) => setAnchorEl(null);

    return (
        <>

            <IconButton
                varinat="text"
                color="ternary"
                onClick={_handleShowDropdown}
            >
                <LuPaperclip size={20}/>
            </IconButton>

            <AttachmentDropdown
                anchorEl={anchorEl}
                isOpen={Boolean(anchorEl)}
                onClose={_handleHideDropdown}
            />

        </>
    )
}

export default Attachment;

