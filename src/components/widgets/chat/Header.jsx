// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {IconButton, Stack , useMediaQuery} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// components
import Info from "components/widgets/chat/Info.jsx";
import Toolbar from "components/widgets/chat/Toolbar.jsx";

const Header = () => {

    const navigate = useNavigate();
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
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "secondary.main",
                padding: 2
            }}
        >

            {
                isTablet && (
                    <IconButton
                        variant="text"
                        color="ternary"
                        onClick={() => navigate("/")}
                    >
                        {language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
                    </IconButton>
                )
            }

            <Info/>

            <Toolbar/>

        </Stack>
    )
}

export default Header;