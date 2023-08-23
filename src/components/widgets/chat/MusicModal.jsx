// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Modal, Stack, IconButton, Typography, useTheme, alpha, Container, Card} from "@mui/material";
import {FiPlay, FiX} from "react-icons/fi";
import {LuPlay} from "react-icons/lu";

const MusicModal = () => {

    const theme = useTheme();

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                position: "absolute",
                top: 70,
                left: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                borderRadius: 0,
                boxShadow: 3,
                padding: 2,
            }}
        >

            <IconButton
                variant="text"
                color="error"
            >
                <FiX size={20}/>
            </IconButton>

            <Typography
                variant="body2"
                color="textPrimary"
                fontWeight="bold"
            >
                11:11
            </Typography>

            <IconButton
                variant="text"
                color="ternary"
            >
                <FiPlay size={20}/>
            </IconButton>

        </Stack>
    )
}

export default MusicModal;

