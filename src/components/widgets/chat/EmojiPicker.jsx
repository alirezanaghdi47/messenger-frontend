// libraries
import {useRef} from "react";
import {useClickOutside} from "@react-hooks-library/core";
import {Box, IconButton} from "@mui/material";
import {LuSmile} from "react-icons/lu";

// hooks
import {useDropdownMenu} from "hooks/useDropdownMenu";

// components
import EmojiDropdownMenu from "components/widgets/chat/EmojiDropdownMenu";

const EmojiPicker = ({text , setText}) => {

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
                text={text}
                setText={(value) => setText(value)}
            />

        </Box>
    )
}

export default EmojiPicker;