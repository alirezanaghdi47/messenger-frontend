// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiFile, FiImage, FiMapPin, FiMusic, FiFilm} from "react-icons/fi";
import {LuPaperclip} from "react-icons/lu";

const attachmentList = [
    {id: 1 , title: "menu.file", value: "file" , icon: <FiFile size={20}/>},
    {id: 2 , title: "menu.image", value: "image" , icon: <FiImage size={20}/>},
    {id: 3 , title: "menu.video", value: "video" , icon: <FiFilm size={20}/>},
    {id: 5 , title: "menu.location", value: "location" , icon: <FiMapPin size={20}/>},
];

const Attachment = () => {

    const {t} = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <>

            <IconButton
                varinat="text"
                color="ternary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <LuPaperclip size={20}/>
            </IconButton>

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
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
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

        </>
    )
}

export default Attachment;

