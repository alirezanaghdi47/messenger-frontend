// libraries
import {useState} from "react";

export const useDropdownMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const isOpenDropdownMenu = Boolean(anchorEl);

    const _handleShowDropdownMenu = (e) => setAnchorEl(e.currentTarget);

    const _handleHideDropdownMenu = () => setAnchorEl(null);

    return {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu};

}

