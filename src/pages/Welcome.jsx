// libraries
import {useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

// components
import Language from "@/components/widgets/welcome/Language.jsx";
import FontSize from "@/components/widgets/welcome/FontSize.jsx";
import Color from "@/components/widgets/welcome/Color.jsx";
import Background from "@/components/widgets/welcome/Background.jsx";
import Theme from "@/components/widgets/welcome/Theme.jsx";

// layouts
import Other from "@/layouts/Other.jsx";

const Welcome = () => {

    const navigate = useNavigate();
    const {activity} = useSelector(state => state.user.setting);

    useLayoutEffect(() => {
        if (activity === "finish") navigate("/");
    }, [activity]);

    return (
        <Other>

            {activity === "language" && <Language/>}
            {activity === "fontSize" && <FontSize/>}
            {activity === "color" && <Color/>}
            {activity === "background" && <Background/>}
            {activity === "theme" && <Theme/>}

        </Other>
    )
}

export default Welcome;