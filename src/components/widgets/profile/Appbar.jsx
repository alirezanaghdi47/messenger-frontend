// libraries
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Grid, IconButton} from "@mui/material";
import {FiLogOut, FiMessageCircle} from "react-icons/fi";

// assets
import logo from "@/assets/images/logo.png";

const Appbar = () => {

    const navigate = useNavigate();

    return (
        <Grid
            container
            spacing={2}
            sx={{width: "100%"}}
        >

            <Grid
                item
                xs={4}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center"
                }}
            >

                <IconButton
                    variant="text"
                    color="ternary"
                    onClick={() => navigate("/")}
                >
                    <FiMessageCircle size={20}/>
                </IconButton>

            </Grid>

            <Grid
                item
                xs={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >

                <LazyLoadImage
                    alt="logo"
                    src={logo}
                    width={40}
                    height={40}
                />

            </Grid>

            <Grid
                item
                xs={4}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center"
                }}
            >

                <IconButton
                    variant="text"
                    color="ternary"
                >
                    <FiLogOut size={20}/>
                </IconButton>

            </Grid>

        </Grid>
    )
}

export default Appbar;

