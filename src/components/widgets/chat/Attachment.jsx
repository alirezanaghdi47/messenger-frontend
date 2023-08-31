// libraries
import {useTranslation} from "react-i18next"
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {LuPaperclip} from "react-icons/lu";
import {FiFile, FiFilm, FiImage, FiMapPin} from "react-icons/fi";

// components
import {useDropdownMenu} from "components/hooks/useDropdownMenu";

const attachmentList = [
    {id: 1, title: "menu.file", value: "file", icon: <FiFile size={20}/>},
    {id: 2, title: "menu.image", value: "image", icon: <FiImage size={20}/>},
    {id: 3, title: "menu.video", value: "video", icon: <FiFilm size={20}/>},
    {id: 5, title: "menu.location", value: "location", icon: <FiMapPin size={20}/>},
];

const AttachmentMenuItem = ({attachmentMenuItem}) => {

    const {t} = useTranslation();

    return (
        <MenuItem
            sx={{
                display: "flex",
                gap: 1,
                justifyContent: "start",
                alignItems: "center",
                color: "ternary.main"
            }}
            onClick={() => console.log(attachmentMenuItem.value)}
        >

            {attachmentMenuItem.icon}

            <Typography
                variant="body2"
                color="textSecondary"
                fontWeight='bold'
            >
                {t(attachmentMenuItem.title)}
            </Typography>

        </MenuItem>
    )
}

const AttachmentMenu = ({anchorEl, isOpen, onClose}) => {

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={isOpen}
            onClose={onClose}
        >

            {
                attachmentList.map(attachmentItem =>
                    <AttachmentMenuItem
                        key={attachmentItem.id}
                        attachmentMenuItem={attachmentItem}
                    />
                )
            }

        </Menu>
    )
}

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

            <AttachmentMenu
                anchorEl={anchorEl}
                isOpen={isOpenDropdownMenu}
                onClose={_handleHideDropdownMenu}
            />

        </>
    )
}

export default Attachment;

