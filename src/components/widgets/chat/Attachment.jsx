// libraries
import {useSelector} from "react-redux";
import Loadable from '@loadable/component';
import {IconButton} from "@mui/material";
import {LuPaperclip} from "react-icons/lu";

// components
import {useDropdownMenu} from "hooks/useDropdownMenu";

const AttachmentDropdownMenu = Loadable(() => import("components/widgets/chat/AttachmentDropdownMenu"));

const Attachment = () => {

    const {queueMessage} = useSelector(state => state.chat);
    const {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu} = useDropdownMenu();

    return (
        <>
            <IconButton
                varinat="text"
                color="ternary"
                onClick={_handleShowDropdownMenu}
                disabled={Object.keys(queueMessage).length > 0}
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

