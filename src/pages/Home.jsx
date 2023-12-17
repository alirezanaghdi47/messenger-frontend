// libraries
import {Stack} from "@mui/material";

// components
import Header from "components/widgets/home/Header";
import Intro from "components/widgets/home/Intro";
import Form from "components/widgets/home/Form";

// layouts
import Secondary from "layouts/Secondary";

// hooks
import {useSegment} from "hooks/useSegment";

const Home = () => {

    const {segment , _handleNextSegment} = useSegment();

    return (
        <Secondary>

            <Stack
                component="main"
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Header/>

                {
                    segment.active === 0 && (
                        <Intro
                            onNext={_handleNextSegment}
                        />
                    )
                }

                {
                    segment.active === 1 && (
                        <Form/>
                    )
                }

            </Stack>

        </Secondary>
    );
}

export default Home;