// libraries
import {useLayoutEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Home = () => {

    const location = useLocation()
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (location.pathname === "/") navigate("/chat");
    }, []);

    return null;
}

export default Home;