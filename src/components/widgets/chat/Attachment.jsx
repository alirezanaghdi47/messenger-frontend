// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiFile, FiImage, FiMapPin, FiMusic, FiVideo} from "react-icons/fi";
import {LuPaperclip} from "react-icons/lu";

const Attachment = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation();

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
                    onClick={() => console.log("video")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiVideo size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.video")}
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

