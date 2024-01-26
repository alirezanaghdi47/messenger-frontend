// libraries
import {Outlet} from "react-router-dom";
import {Grid, Stack, useMediaQuery} from "@mui/material";

// components
import Slider from "components/widgets/auth/Slider";

// layouts
import SecondaryLayout from "layouts/SecondaryLayout";
import Footer from "components/widgets/auth/Footer";
import Header from "components/widgets/auth/Header";

const AuthPage = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <SecondaryLayout>

            <Grid
                container
                sx={{
                    width: "100%",
                    minHeight: "100dvh",
                    height: "100%"
                }}
            >

                <Grid
                    component="main"
                    item
                    xs={12}
                    md={6}
                    lg={5}
                    xl={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        minHeight: "100dvh",
                        height: "100%",
                        bgcolor: "background.paper",
                        borderRightWidth: 1,
                        borderRightStyle: "solid",
                        borderRightColor: "secondary.main",
                    }}
                >

                    <Stack
                        direction="column"
                        gap={4}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            minHeight: "100dvh",
                            height: "100%",
                            padding: 2
                        }}
                    >
                        <Header/>
                        <Outlet/>
                        <Footer/>
                    </Stack>

                </Grid>

                <Grid
                    component="aside"
                    item
                    md={6}
                    lg={7}
                    xl={8}
                    sx={{
                        display: isTablet ? "none" : "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        minHeight: "100dvh",
                        height: "100%",
                    }}
                >
                    <Slider/>
                </Grid>

            </Grid>

        </SecondaryLayout>
    );
}

export default AuthPage;