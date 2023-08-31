// libraries
import {motion} from "framer-motion";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Header from "components/widgets/setting/Header.jsx";
import Personalization from "components/widgets/appearance/Personalization.jsx";

// utils
import {slideInRightVariants} from "utils/constants";

const Appearance = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component={motion.div}
            variants={slideInRightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            direction="column"
            sx={{
                position: 'absolute',
                zIndex: 200,
                top: 0,
                bottom: 0,
                left: isTablet ? 0 : 360,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isTablet ? "100%" : "calc(100% - 360px)",
                height: "100dvh",
            }}
        >

            <Header title="typography.appearance"/>

            <Personalization/>

        </Stack>
    )
}

export default Appearance;

