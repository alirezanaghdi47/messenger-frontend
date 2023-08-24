// libraries
import {useState} from "react";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Menu} from "@mui/material";
import {FiPlus} from "react-icons/fi";

// components
import CreateChat from "./CreateChat";

const ActionButton = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isDesktop = useMediaQuery('(max-width: 992px)');

    return (
        <>

            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{
                    position: 'absolute',
                    zIndex: 25,
                    left: isDesktop ? "calc(100% - 60px)" : "calc(360px - 60px)",
                    bottom: 16
                }}
            >
                <FiPlus size={20}/>
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

                <CreateChat/>

            </Menu>

        </>
    )
}

export default ActionButton;

