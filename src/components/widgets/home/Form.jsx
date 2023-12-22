// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack} from "@mui/material";

// styles
import {GoogleLoginButton} from "styles/global";

const Form = () => {

    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}
        >

            <GoogleLoginButton
                theme={darkMode ? "dark" : "light"}
                onClick={() => window.open(`${process.env.REACT_APP_API_URL}/api/auth/google`, "_self")}
            >

                <LazyLoadImage
                    src="/images/google.png"
                    alt="avatar"
                    visibleByDefault
                    width={20}
                    height={20}
                    effect='blur'
                />

                {t("button.google")}

            </GoogleLoginButton>

        </Stack>
    )
}

export default Form;