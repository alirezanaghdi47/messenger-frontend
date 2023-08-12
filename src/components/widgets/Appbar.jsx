// libraries
import {useDispatch} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Grid, IconButton} from "@mui/material";
import {FiSearch, FiUser} from "react-icons/fi";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setActiveProfile} from "@/stores/slices/profile.js";

const Appbar = () => {

    const dispatch = useDispatch();

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
                >
                    <FiSearch size={20}/>
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
                    onClick={() => dispatch(setActiveProfile("profile"))}
                >
                    <FiUser size={20}/>
                </IconButton>

            </Grid>

        </Grid>
    )
}

export default Appbar;

