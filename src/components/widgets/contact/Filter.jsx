// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {IconButton, Menu, MenuItem,Typography} from "@mui/material";
import {FiFile, FiFilm, FiImage, FiMapPin, FiMusic} from "react-icons/fi";
import {LuFilter} from "react-icons/lu";

const filterList = [
    {_id: 1, title: "menu.file", value: "file" , icon: <FiFile size={16}/>},
    {_id: 2, title: "menu.image", value: "image" , icon: <FiImage size={16}/>},
    {_id: 3, title: "menu.video", value: "video" , icon: <FiFilm size={16}/>},
    {_id: 4, title: "menu.voice", value: "voice" , icon: <FiMusic size={16}/>},
    {_id: 5, title: "menu.location", value: "location" , icon: <FiMapPin size={16}/>},
];

const Filter = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation();

    return (
        <>

            <IconButton
                varinat="text"
                color="ternary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <LuFilter size={20}/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >

                {
                    filterList.map(filterItem =>
                        <MenuItem
                            key={filterItem._id}
                            onClick={() => console.log(filterItem.value)}
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >

                            {filterItem.icon}

                            <Typography
                                variant="body2"
                                color="textSecondary"
                                fontWeight='bold'
                            >
                                {t(filterItem.title)}
                            </Typography>

                        </MenuItem>

                    )
                }

            </Menu>

        </>
    )
}

export default Filter;