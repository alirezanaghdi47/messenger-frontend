// libraries
import {useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";

// components
import Ternary from "@/components/layouts/Ternary.jsx";

const Home = () => {

    const navigate = useNavigate();

    useLayoutEffect(() => {
        navigate("/chat");
    }, []);

    return (
        <Ternary>

        </Ternary>
    )
}

export default Home;