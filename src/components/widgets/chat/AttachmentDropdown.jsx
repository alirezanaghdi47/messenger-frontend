// libraries
import {useTranslation} from "react-i18next";
import {Menu, MenuItem, Typography} from "@mui/material";
import {FiFile, FiFilm, FiImage, FiMapPin} from "react-icons/fi";

const attachmentList = [
    {id: 1 , title: "menu.file", value: "file" , icon: <FiFile size={20}/>},
    {id: 2 , title: "menu.image", value: "image" , icon: <FiImage size={20}/>},
    {id: 3 , title: "menu.video", value: "video" , icon: <FiFilm size={20}/>},
    {id: 5 , title: "menu.location", value: "location" , icon: <FiMapPin size={20}/>},
];

const AttachmentDropdown = ({anchorEl , isOpen , onClose}) => {

    const {t} = useTranslation();

    return(
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
                    <MenuItem
                        key={attachmentItem.id}
                        sx={{
                            display: "flex",
                            gap: 1,
                            justifyContent: "start",
                            alignItems: "center",
                            color: "ternary.main"
                        }}
                        onClick={() => console.log(attachmentItem.value)}
                    >

                        {attachmentItem.icon}

                        <Typography
                            variant="body2"
                            color="textSecondary"
                            fontWeight='bold'
                        >
                            {t(attachmentItem.title)}
                        </Typography>

                    </MenuItem>
                )
            }

        </Menu>
    )
}

export default AttachmentDropdown;