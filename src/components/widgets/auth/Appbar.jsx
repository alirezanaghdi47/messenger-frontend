// libraries
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack} from "@mui/material";

// assets
import logo from "assets/images/logo.png";

// styles
import 'react-lazy-load-image-component/src/effects/blur.css';

const Appbar = () => {

    const navigate = useNavigate();

    const _handleBack = () => navigate("/chat");
    
    return(
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                textDecoration: "none",
                cursor: "pointer"
            }}
            onClick={_handleBack}
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
    )
}

export default Appbar;