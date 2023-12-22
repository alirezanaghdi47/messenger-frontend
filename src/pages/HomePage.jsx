// libraries
import {useEffect, useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Stack} from "@mui/material";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

// components
import Header from "components/widgets/home/Header";
import Slider from "components/widgets/home/Slider";
import Form from "components/widgets/home/Form";

// layouts
import SecondaryLayout from "layouts/SecondaryLayout";

// stores
import {signIn} from "stores/slices/authSlice";
import {setUser} from "stores/slices/settingSlice";

const HomePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth);

    useEffect(() => {

        if (Cookies.get("token")) {
            dispatch(signIn({token: Cookies.get("token"), expire: jwtDecode(Cookies.get("token"))?.exp}));
            dispatch(setUser(jwtDecode(Cookies.get("token"))?.user));
            Cookies.remove("token");
            navigate("/chat");
        }

    }, [Cookies.get("token")]);

    useLayoutEffect(() => {
        if (token) navigate("/chat");
    }, []);

    return (
        <SecondaryLayout>

            <Stack
                component="main"
                direction="column"
                gap={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Header/>

                <Slider/>

                <Form/>

            </Stack>

        </SecondaryLayout>
    );
}

export default HomePage;