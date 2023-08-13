// libraries
import {useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

// components
import Secondary from "@/components/layouts/Secondary.jsx";
import Language from "@/components/widgets/setup/Language.jsx";
import FontSize from "@/components/widgets/setup/FontSize.jsx";
import Color from "@/components/widgets/setup/Color.jsx";
import Background from "@/components/widgets/setup/Background.jsx";
import Theme from "@/components/widgets/setup/Theme.jsx";

const Setup = () => {

    const navigate = useNavigate();
    const {setup} = useSelector(state => state.profile.setting);

    useLayoutEffect(() => {
        if (setup === "finish") navigate("/chat");
    }, [setup]);

    return (
        <Secondary>

            {setup === "language" && <Language/>}
            {setup === "fontSize" && <FontSize/>}
            {setup === "color" && <Color/>}
            {setup === "background" && <Background/>}
            {setup === "theme" && <Theme/>}

        </Secondary>
    )
}

export default Setup;