// libraries
import Loadable from '@loadable/component';
import {IconButton} from "@mui/material";
import {LuPaperclip} from "react-icons/lu";

// components
import {useDropdownMenu} from "hooks/useDropdownMenu";

const AttachmentDropdownMenu = Loadable(() => import("components/widgets/chat/AttachmentDropdownMenu"));

const Attachment = () => {

    const {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu} = useDropdownMenu();

    return (
        <>

            <IconButton
                varinat="text"
                color="ternary"
                onClick={_handleShowDropdownMenu}
            >
                <LuPaperclip size={20}/>
            </IconButton>

            <AttachmentDropdownMenu
                anchorEl={anchorEl}
                isOpen={isOpenDropdownMenu}
                onClose={_handleHideDropdownMenu}
            />

        </>
    )
}

export default Attachment;

