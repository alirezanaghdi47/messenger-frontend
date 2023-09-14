// libraries
import {useRef} from "react";
import Loadable from '@loadable/component';
import {useClickOutside} from "@react-hooks-library/core";
import {Box, IconButton} from "@mui/material";
import {LuSmile} from "react-icons/lu";

// components
import {useDropdownMenu} from "components/hooks/useDropdownMenu";
const EmojiDropdownMenu = Loadable(() => import("components/widgets/chat/EmojiDropdownMenu"));

const EmojiPicker = ({message , setMessage}) => {

     const ref = useRef(null);

    const {anchorEl , isOpenDropdownMenu, _handleHideDropdownMenu, _handleToggleDropdownMenu} = useDropdownMenu();

    useClickOutside(ref, () => {
        _handleHideDropdownMenu();
    });

    return (
        <Box
            ref={ref}
            sx={{position: "relative"}}
        >

            <IconButton
                varinat="text"
                color="ternary"
                onClick={_handleToggleDropdownMenu}
            >
                <LuSmile size={20}/>
            </IconButton>

            <EmojiDropdownMenu
                anchorEl={anchorEl}
                isOpen={isOpenDropdownMenu}
                onClose={_handleHideDropdownMenu}
                message={message}
                setMessage={(value) => setMessage(value)}
            />

        </Box>
    )
}

export default EmojiPicker;

