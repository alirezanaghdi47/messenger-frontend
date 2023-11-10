// libraries
import {useState} from "react";

export const useDropdownMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const isOpenDropdownMenu = Boolean(anchorEl);

    const _handleShowDropdownMenu = (e) => setAnchorEl(e.currentTarget);

    const _handleHideDropdownMenu = () => setAnchorEl(null);

    const _handleToggleDropdownMenu = (e) => isOpenDropdownMenu ? _handleHideDropdownMenu(): _handleShowDropdownMenu(e);

    return {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu , _handleToggleDropdownMenu};

}

