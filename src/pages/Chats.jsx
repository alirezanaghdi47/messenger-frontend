// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "layouts/Primary.jsx";
import Empty from "components/widgets/chat/Empty";

const Chats = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Primary>

            <Stack
                component="main"
                direction="column"
                sx={{
                    position: 'absolute',
                    zIndex: 200,
                    top: 0,
                    bottom: 0,
                    left: isTablet ? 0 : 360,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: isTablet ? "100%" : "calc(100% - 360px)",
                    height: "100dvh",
                }}
            >

                <Empty/>

            </Stack>

        </Primary>
    )
}

export default Chats;