// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiFile, FiImage, FiMapPin, FiMusic, FiPaperclip} from "react-icons/fi";

const Attachment = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation();

    return (
        <>

            <IconButton
                varinat="text"
                color="secondary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiPaperclip size={20}/>
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

                <MenuItem
                    onClick={() => console.log("file")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiFile size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.file")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    onClick={() => console.log("image")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiImage size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.image")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    onClick={() => console.log("voice")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiMusic size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.voice")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    onClick={() => console.log("location")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiMapPin size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.location")}
                    </Typography>

                </MenuItem>

            </Menu>

        </>
    )
}

export default Attachment;

