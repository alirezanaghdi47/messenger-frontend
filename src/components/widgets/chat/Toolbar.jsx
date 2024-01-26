// libraries
import Loadable from '@loadable/component';
import {IconButton} from "@mui/material";
import {FiMoreVertical} from "react-icons/fi";

// hooks
import {useDropdownMenu} from "hooks/useDropdownMenu";

// components
const ToolbarDropdownMenu = Loadable(() => import("components/widgets/chat/ToolbarDropdownMenu"));

const Toolbar = () => {

    const {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu} = useDropdownMenu();

    return (
        <>
            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={_handleShowDropdownMenu}
            >
                <FiMoreVertical size={20}/>
            </IconButton>

            <ToolbarDropdownMenu
                anchorEl={anchorEl}
                isOpen={isOpenDropdownMenu}
                onClose={_handleHideDropdownMenu}
            />
        </>
    )
}

export default Toolbar;