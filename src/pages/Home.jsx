// libraries
import {useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

// components
import Secondary from "@/components/layouts/Secondary.jsx";

const Home = () => {

    const navigate = useNavigate();
    const {setup} = useSelector(state => state.user.setting);

    useLayoutEffect(() => {

        if (setup === "finish") {
            navigate("/chat");
        } else {
            navigate("/setup");
        }

    }, [setup]);

    return (
        <Secondary>

        </Secondary>
    )
}

export default Home;