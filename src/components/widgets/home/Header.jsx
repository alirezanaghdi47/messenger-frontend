// libraries
import {Stack} from "@mui/material";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Header = () => {

    return (
        <Stack
            direction="row"
            sx={{
                zIndex: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <LazyLoadImage
                src="/images/logo.png"
                alt="logo"
                visibleByDefault
                width={40}
                height={40}
                effect='blur'
            />

        </Stack>
    )
}

export default Header;