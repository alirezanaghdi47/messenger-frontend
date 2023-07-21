// libraries
import {useLayoutEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setActivePage} from "@/stores/slices/other.js";

// components
import Language from "@/components/widgets/welcome/Language.jsx";
import FontSize from "@/components/widgets/welcome/FontSize.jsx";
import Color from "@/components/widgets/welcome/Color.jsx";
import Background from "@/components/widgets/welcome/Background.jsx";
import Theme from "@/components/widgets/welcome/Theme.jsx";

// layouts
import Other from "@/layouts/Other.jsx";

const Welcome = () => {

    const dispatch = useDispatch();
    const {activePage} = useSelector(state => state.other);

    useLayoutEffect(() => {
        dispatch(setActivePage({data: null, type: "language"}));
    }, []);

    return (
        <Other>

            {activePage.type === "language" && <Language/>}
            {activePage.type === "fontSize" && <FontSize/>}
            {activePage.type === "color" && <Color/>}
            {activePage.type === "background" && <Background/>}
            {activePage.type === "theme" && <Theme/>}

        </Other>
    )
}

export default Welcome;