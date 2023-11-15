// libraries
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IconButton, Stack} from "@mui/material";
import {FiSettings} from "react-icons/fi";

// assets
import logo from "assets/images/logo.png";

// styles
import 'react-lazy-load-image-component/src/effects/blur.css';

const Appbar = () => {

    const navigate = useNavigate();

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
                    src={logo}
                    alt="logo"
                    visibleByDefault
                    width={40}
                    height={40}
                    placeholderSrc="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/placeholder.jpg"
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

export default Appbar;

