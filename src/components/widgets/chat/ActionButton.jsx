// libraries
import {forwardRef, useEffect} from "react";
import {useSelector} from "react-redux";
import {useToggle} from "@react-hooks-library/core";
import {IconButton} from "@mui/material";
import {FiChevronDown} from "react-icons/fi";

const ActionButton = forwardRef((props, ref) => {

    const {bool: showButton, setTrue: setShowButton, setFalse: setHideButton} = useToggle(true);

    const {darkMode} = useSelector(state => state.setting.appearance);

    const _handleScroll = (e) => {

        if (e.target.scrollTop + e.target.clientHeight + 100 < e.target.scrollHeight){
            setShowButton();
        } else {
            setHideButton();
        }

    }

    useEffect(() => {
        document.getElementById("messages").addEventListener("scroll" , _handleScroll);
    }, []);

    return showButton && (

        <IconButton
            variant="contained"
            color={darkMode ? "dark" : "light"}
            size="large"
            sx={{
                position: 'absolute',
                zIndex: 25,
                left: 16,
                bottom: 96
            }}
            onClick={() => ref?.current?.scrollTo({top: ref?.current?.scrollHeight})}
        >
            <FiChevronDown size={20}/>
        </IconButton>
    )
})

export default ActionButton;

