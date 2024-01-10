// libraries
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useToggle} from "@react-hooks-library/core";
import {Grow, IconButton} from "@mui/material";
import {FiChevronDown} from "react-icons/fi";

const ActionButton = ({lastMessageRef}) => {

    const {darkMode} = useSelector(state => state.setting.appearance);
    const {bool: showButton, setTrue: setShowButton, setFalse: setHideButton} = useToggle(true);

    const _handleScroll = (e) => {
        if (e.target.scrollTop + e.target.clientHeight + 200 < e.target.scrollHeight){
            setShowButton();
        } else {
            setHideButton();
        }
    }

    useEffect(() => {
        document.getElementById("messages").addEventListener("scroll" , _handleScroll);
    }, []);

    return (
        <Grow in={showButton}>

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
                onClick={() => lastMessageRef?.current?.scrollIntoView({behavior: "smooth"})}
            >
                <FiChevronDown size={20}/>
            </IconButton>

        </Grow>
    )
}

export default ActionButton;

