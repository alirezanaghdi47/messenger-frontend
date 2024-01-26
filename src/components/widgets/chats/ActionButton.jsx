// libraries
import Loadable from '@loadable/component';
import {IconButton, useMediaQuery} from "@mui/material";
import {FiPlus} from "react-icons/fi";

// hooks
import {useDropdownMenu} from "hooks/useDropdownMenu";

// components
const ActionDropdownMenu = Loadable(() => import("components/widgets/chats/ActionDropdownMenu"));

const ActionButton = () => {

    const isDesktop = useMediaQuery('(max-width: 992px)');
    const {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu} = useDropdownMenu();

    return (
        <>
            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={_handleShowDropdownMenu}
                sx={{
                    position: 'absolute',
                    zIndex: 25,
                    left: isDesktop ? "calc(100% - 60px)" : "calc(360px - 60px)",
                    bottom: 16
                }}
            >
                <FiPlus size={20}/>
            </IconButton>

            <ActionDropdownMenu
                anchorEl={anchorEl}
                isOpen={isOpenDropdownMenu}
                onClose={_handleHideDropdownMenu}
            />
        </>
    )
}

export default ActionButton;

