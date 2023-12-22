// libraries
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Menu, MenuItem, Typography} from "@mui/material";
import {FiCornerUpLeft, FiCornerUpRight} from "react-icons/fi";
import {LuTrash2} from "react-icons/lu";

// stores
import {showModal , showPopup} from "stores/slices/appSlice";

const MessageDropdownMenu = ({contextMenu, isOpen, onClose}) => {

    const dispatch = useDispatch();
    const {t} = useTranslation();

    return (
        <Menu
            open={isOpen}
            onClose={onClose}
            anchorReference="anchorPosition"
            anchorPosition={
                isOpen
                    ? {top: contextMenu.mouseY, left: contextMenu.mouseX}
                    : undefined
            }
        >

            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: 'ternary.main'
                }}
                onClick={() => {
                    onClose();
                    dispatch(showModal({type: "forwardChat"}));
                }}
            >

                <FiCornerUpRight size={20}/>

                <Typography
                    variant="body2"
                    color="ternary"
                    fontWeight='bold'
                >
                    {t("menu.forward")}
                </Typography>

            </MenuItem>

            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: 'ternary.main'
                }}
                onClick={() => {
                    onClose();
                    dispatch(showPopup({type: "replyChat"}));
                }}
            >

                <FiCornerUpLeft size={20}/>

                <Typography
                    variant="body2"
                    color="ternary"
                    fontWeight='bold'
                >
                    {t("menu.reply")}
                </Typography>

            </MenuItem>

            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "error.main"
                }}
                onClick={() => {
                    onClose();
                    dispatch(showModal({type: "deleteChat"}));
                }}
            >

                <LuTrash2 size={20}/>

                <Typography
                    variant="body2"
                    color="error"
                    fontWeight='bold'
                >
                    {t("menu.delete")}
                </Typography>

            </MenuItem>

        </Menu>
    )
}

export default MessageDropdownMenu;