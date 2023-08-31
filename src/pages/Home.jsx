// libraries
import {useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    useLayoutEffect(() => {
        navigate("/chat");
    }, []);

    return (
        <>

        </>
    )
}

export default Home;