// libraries
import {useLayoutEffect} from "react";
import {useSelector , useDispatch} from "react-redux";
import {setCurrentPage} from "@/stores/slices/app.js";

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
    const {currentPage} = useSelector(state => state.app);

    useLayoutEffect(() => {
        dispatch(setCurrentPage({data: null , type: "language"}));
    } , []);

    return (
        <Other>

            {currentPage.type === "language" && <Language/>}
            {currentPage.type === "fontSize" && <FontSize/>}
            {currentPage.type === "color" && <Color/>}
            {currentPage.type === "background" && <Background/>}
            {currentPage.type === "theme" && <Theme/>}

        </Other>
    )
}

export default Welcome;