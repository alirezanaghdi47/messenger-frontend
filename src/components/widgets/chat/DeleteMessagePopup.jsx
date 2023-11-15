// libraries
import {useTranslation} from "react-i18next";
import {Stack, Checkbox, Typography, IconButton} from "@mui/material";
import {LuFile, LuFilm, LuImage, LuMapPin, LuMusic, LuText} from "react-icons/lu";
import {FiPhone, FiVideo, FiCornerUpRight, FiX, FiTrash} from "react-icons/fi";

const DeleteMessagePopup = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            sx={{
                position: "absolute",
                bottom: 0,
                zIndex: 150,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "secondary.main",
                padding: 2
            }}
        >

            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                }}
            >

                <IconButton
                    variant="text"
                    color="ternary"
                >
                    <FiCornerUpRight size={20}/>
                </IconButton>

                <IconButton
                    variant="text"
                    color="error"
                >
                    <FiTrash size={20}/>
                </IconButton>

            </Stack>

            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                }}
            >

                <Typography>
                    2 {t("typography.item")} {t("typography.selected")}
                </Typography>

                <IconButton
                    variant="text"
                    color="ternary"
                >
                    <FiX size={20}/>
                </IconButton>

            </Stack>

        </Stack>
    )
}

export default DeleteMessagePopup;

