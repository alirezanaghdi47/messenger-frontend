// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Stack} from "@mui/material";

// components
import Sidebar from "@/components/partials/Sidebar.jsx";
import Header from "@/components/partials/Header.jsx";
import Footer from "@/components/partials/Footer.jsx";

const Primary = ({children}) => {

    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        <Container
            maxWidth="xl"
            disableGutters
        >

            <Stack
                direction={isMobile ? "column" : "row"}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    minHeight: "100dvh"
                }}
            >

                {!isMobile && <Sidebar/>}

                {isMobile && <Header/>}

                {children}

                {isMobile && <Footer/>}

            </Stack>

        </Container>
    )
}

export default Primary;

