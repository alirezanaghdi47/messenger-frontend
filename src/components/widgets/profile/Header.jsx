// libraries
import {useSelector} from "react-redux";
import {useNavigate , Link} from "react-router-dom";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack, IconButton, Typography} from "@mui/material";
import {FiChevronLeft, FiChevronRight, FiLogOut} from "react-icons/fi";

const Header = ({title}) => {

    const navigate = useNavigate();
    const {language} = useSelector(state => state.user.setting);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="header"
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 70,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            {
                isTablet && (
                    <IconButton
                        component={Link}
                        to="/user"
                        variant="text"
                        color="secondary"
                    >
                        {language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
                    </IconButton>
                )
            }

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight="bold"
            >
                {title}
            </Typography>

            <IconButton
                variant="text"
                color="secondary"
                onClick={() => navigate("/auth/login")}
            >
                <FiLogOut size={20}/>
            </IconButton>

        </Stack>
    )
}

export default Header;