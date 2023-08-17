// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {
    IconButton,
    Stack,
    Typography,
    MenuItem,
    Menu,
} from "@mui/material";
import {FiMoreVertical, FiTrash, FiBellOff, FiVideo, FiPhone, FiMessageCircle, FiFilter} from "react-icons/fi";

// components
import Filter from "@/components/widgets/contact/Filter.jsx";

const Toolbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation();

    return (
        <Stack
            direction='row'
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: 'center'
            }}
        >

            <Filter/>

            <IconButton
                variant="text"
                color="ternary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiMoreVertical size={20}/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                        color: "ternary.main"
                    }}
                >

                    <FiMessageCircle size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.chat")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                        color: "ternary.main"
                    }}
                >

                    <FiPhone size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.voiceCall")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                        color: "ternary.main"
                    }}
                >

                    <FiVideo size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.videoCall")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                        color: "ternary.main"
                    }}
                >

                    <FiBellOff size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.mute")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                        color: "ternary.main"
                    }}
                >

                    <FiTrash size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.deleteAll")}
                    </Typography>

                </MenuItem>

            </Menu>

        </Stack>
    )
}

export default Toolbar;