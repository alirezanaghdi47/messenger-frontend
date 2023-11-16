// libraries
import {forwardRef} from "react";
import {IconButton} from "@mui/material";
import {LuChevronDown} from "react-icons/lu";

const ActionButton = forwardRef((props, ref) => {

    return (
        <IconButton
            variant="contained"
            color="light"
            size="large"
            sx={{
                position: 'absolute',
                zIndex: 25,
                left: 16,
                bottom: 96,
                boxShadow: 3
            }}
        >
            <LuChevronDown size={20}/>
        </IconButton>
    )
})

export default ActionButton;

