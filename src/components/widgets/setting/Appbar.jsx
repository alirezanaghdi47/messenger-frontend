// libraries
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {IconButton, Stack} from "@mui/material";
import {FiChevronLeft, FiChevronRight, FiLogOut} from "react-icons/fi";

// stores
import {signOut} from "stores/slices/authSlice";

const Appbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {language} = useSelector(state => state.setting.appearance);

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                position: 'absolute',
                zIndex: 100,
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                width: "100%",
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000 100%)",
                padding: 2
            }}
        >

            <IconButton
                variant="text"
                color="light"
                onClick={() => navigate("/chat")}
            >
                {language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
            </IconButton>

            <IconButton
                variant="text"
                color="light"
                onClick={() => {
                    dispatch(signOut());
                    window.open("http://localhost:4000/api/auth/logout" , "_self");
                }}
            >
                {<FiLogOut size={20}/>}
            </IconButton>

        </Stack>
    )
}

export default Appbar;

