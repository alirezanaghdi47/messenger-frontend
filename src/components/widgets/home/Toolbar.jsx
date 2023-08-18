// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {
    IconButton,
    Stack,
    Typography,
    MenuItem,
    Menu,
} from "@mui/material";
import {FiMoreVertical, FiPhone, FiVideo, FiTrash2} from "react-icons/fi";

const toolbarList = [
    {id: 1, title: "menu.voiceCall", value: "voiceCall", icon: <FiPhone size={20}/>},
    {id: 2, title: "menu.videoCall", value: "videoCall", icon: <FiVideo size={20}/>},
    {id: 3, title: "menu.deleteAll", value: "deleteAll", icon: <FiTrash2 size={20}/>},
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
                color: "ternary.main"
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

const MobileToolbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <>
            <IconButton
                variant="text"
                color="ternary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiMoreVertical size={20}/>
            </IconButton>

            <DropdownMenu
                list={toolbarList}
                anchorEl={anchorEl}
                setAnchorEl={(data) => setAnchorEl(data)}
            />

        </>
    )
}

const DesktopToolbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <Stack
            component="ul"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: 'center',
            }}
        >

            {
                toolbarList.slice(0, 2).map(toolbarItem =>
                    <IconButton
                        key={toolbarItem.id}
                        component="li"
                        variant="text"
                        color="ternary"
                    >
                        {toolbarItem.icon}
                    </IconButton>
                )
            }

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiMoreVertical size={20}/>
            </IconButton>

            <DropdownMenu
                list={toolbarList.slice(-1)}
                anchorEl={anchorEl}
                setAnchorEl={(data) => setAnchorEl(data)}
            />

        </Stack>
    )
}

const Toolbar = () => {
    const isDesktop = useMediaQuery('(max-width: 992px)');
    return isDesktop ? <MobileToolbar/> : <DesktopToolbar/>
}

export default Toolbar;