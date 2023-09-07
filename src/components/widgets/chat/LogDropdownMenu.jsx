// libraries
import {useTranslation} from "react-i18next";
import {Menu, MenuItem, Typography} from "@mui/material";
import {LuDownload, LuTrash2} from "react-icons/lu";

const LogDropdownMenu = ({contextMenu, isOpen, onClose}) => {

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
                    color: "error.main"
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

            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                }}
            >

                <LuDownload size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.download")}
                </Typography>

            </MenuItem>

        </Menu>
    )
}

export default LogDropdownMenu;