// libraries
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Stack} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// components
import UserInfo from "@/components/widgets/home/UserInfo.jsx";
import Toolbar from "@/components/widgets/home/Toolbar.jsx";

// stores
import {removeActiveChat} from "@/stores/slices/chat.js";

const Header = () => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.profile.setting);
    const isDesktop = useMediaQuery('(max-width: 992px)');

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            {
                isDesktop && (
                    <IconButton
                        variant="text"
                        color="ternary"
                        onClick={() => dispatch(removeActiveChat())}
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