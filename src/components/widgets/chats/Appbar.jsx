// libraries
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {IconButton, Stack, Typography} from "@mui/material";
import {FiSettings} from "react-icons/fi";

// stores
import {setPage} from "stores/slices/app";

const Appbar = () => {

    const dispatch = useDispatch();
    const {t} = useTranslation();

    return (
        <Stack
            component="nav"
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                bgcolor: "background.paper",
            }}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: 'center',
                }}
            >

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight="bold"
                >
                    {t("domain")}
                </Typography>

            </Stack>

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: 'center',
                }}
            >

                <IconButton
                    variant="text"
                    color="ternary"
                    onClick={() => dispatch(setPage({active: "setting"}))}
                >
                    <FiSettings size={20}/>
                </IconButton>

            </Stack>

        </Stack>
    )
}

export default Appbar;

