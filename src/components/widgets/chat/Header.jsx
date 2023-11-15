// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {IconButton, Stack , useMediaQuery} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {LuTrash2} from "react-icons/lu";

// components
import UserInfo from "components/widgets/chat/UserInfo.jsx";

const Header = () => {

    const navigate = useNavigate();
    const {language} = useSelector(state => state.setting.appearance);
    const isTablet = useMediaQuery('(max-width: 768px)');

    const _handleBack = () => {
        navigate("/")
    }

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
                        onClick={_handleBack}
                    >
                        {language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
                    </IconButton>
                )
            }

            <UserInfo/>

            {
                isTablet && (
                    <IconButton
                        variant="text"
                        color="error"
                    >
                        <LuTrash2 size={20}/>
                    </IconButton>
                )
            }

        </Stack>
    )
}

export default Header;