// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IconButton, Stack} from "@mui/material";
import {FiSettings} from "react-icons/fi";

const Header = () => {

    const navigate = useNavigate();
    const {darkMode} = useSelector(state => state.setting.appearance);

    const _handleRedirect = () => navigate("/setting");

    return (
        <Stack
            component="nav"
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                bgcolor: "background.paper",
            }}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: 'center',
                }}
            >

                <LazyLoadImage
                    src={darkMode ? "/images/logo-dark.png" : "/images/logo-light.png"}
                    alt="logo"
                    visibleByDefault
                    width={40}
                    height={40}
                    effect='blur'
                />

            </Stack>

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: 'center',
                }}
            >

                <IconButton
                    variant="text"
                    color="ternary"
                    onClick={_handleRedirect}
                >
                    <FiSettings size={20}/>
                </IconButton>

            </Stack>

        </Stack>
    )
}

export default Header;

