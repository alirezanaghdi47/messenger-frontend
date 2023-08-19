// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiFile, FiImage, FiMapPin, FiMusic, FiFilm} from "react-icons/fi";
import {LuPaperclip} from "react-icons/lu";

const attachmentList = [
    {id: 1 , title: "menu.file", value: "file" , icon: <FiFile size={20}/>},
    {id: 2 , title: "menu.image", value: "image" , icon: <FiImage size={20}/>},
    {id: 3 , title: "menu.movie", value: "movie" , icon: <FiFilm size={20}/>},
    {id: 4 , title: "menu.music", value: "music" , icon: <FiMusic size={20}/>},
    {id: 5 , title: "menu.location", value: "location" , icon: <FiMapPin size={20}/>},
];

const DropdownMenuItem = ({item}) => {

    const {t} = useTranslation();

    return (
        <MenuItem
            key={item.id}
            sx={{
                display: "flex",
                gap: 1,
                justifyContent: "start",
                alignItems: "center",
            }}
            onClick={() => console.log(item.value)}
        >

            {item.icon}

            <Typography
                variant="body2"
                color="textSecondary"
                fontWeight='bold'
            >
                {t(item.title)}
            </Typography>

        </MenuItem>
    )
}

const DropdownMenu = ({anchorEl , setAnchorEl , list}) => {

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
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
        >

            {
                list.map(item =>
                    <DropdownMenuItem
                        key={item.id}
                        item={item}
                    />
                )
            }

        </Menu>
    )
}

const Attachment = () => {

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

            <DropdownMenu
                list={attachmentList}
                anchorEl={anchorEl}
                setAnchorEl={(data) => setAnchorEl(data)}
            />

        </>
    )
}

export default Attachment;

