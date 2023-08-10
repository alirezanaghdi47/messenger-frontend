// libraries
import {useLayoutEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

// components
import Secondary from "@/components/layouts/Secondary.jsx";

const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {setup} = useSelector(state => state.user);

    useLayoutEffect(() => {
        navigate(setup === "finish" ? "/chat" : "/setup");
    }, [setup , location]);

    return (
        <Secondary>

        </Secondary>
    )
}

export default Home;