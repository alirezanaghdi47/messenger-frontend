// libraries
import {useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack} from "@mui/material";

const Header = () => {

    const {darkMode} = useSelector(state => state.setting.appearance);

    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
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
    )
}

export default Header;