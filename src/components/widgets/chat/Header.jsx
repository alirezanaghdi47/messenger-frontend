// libraries
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Stack} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// components
import UserInfo from "components/widgets/chat/UserInfo.jsx";
import Toolbar from "components/widgets/chat/Toolbar.jsx";

// stores
import {setPage} from "stores/slices/app";

const Header = () => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.setting.appearance);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 100,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                padding: 2
            }}
        >

            {
                isTablet && (
                    <IconButton
                        variant="text"
                        color="ternary"
                        onClick={() => dispatch(setPage({active: "chats" , data: null}))}
                    >
                        {language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
                    </IconButton>
                )
            }

            <UserInfo/>

            <Toolbar/>

        </Stack>
    )
}

export default Header;