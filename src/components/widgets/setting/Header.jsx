// libraries
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Box, IconButton, Stack, Typography , useMediaQuery} from "@mui/material";
import {FiChevronLeft, FiChevronRight, FiLogOut} from "react-icons/fi";

// stores
import {signOut} from "stores/slices/authSlice";

const Header = ({title}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return isTablet && (
        <Stack
            direction="row"
            sx={{
                zIndex: 100,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                bgcolor: "background.paper",
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "secondary.main",
                padding: 2
            }}
        >

            <IconButton
                variant="text"
                color="ternary"
                onClick={() => navigate("/setting")}
            >
                {language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
            </IconButton>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight='bold'
                >
                    {t(title)}
                </Typography>

            </Box>

            <IconButton
                variant="text"
                color="ternary"
                onClick={() => {
                    dispatch(signOut());
                    window.open("http://localhost:4000/api/auth/logout" , "_self");
                }}
            >
                <FiLogOut size={20}/>
            </IconButton>

        </Stack>
    )
}

export default Header;