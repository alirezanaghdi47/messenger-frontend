// libraries
import {useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {
    IconButton,
    Stack,
    OutlinedInput,
    InputAdornment,
    FormControl,
    Menu,
    MenuItem, Typography
} from "@mui/material";
import {FiFile, FiImage, FiMapPin, FiMusic, FiPaperclip, FiSend} from "react-icons/fi";

const Attachment = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {darkMode} = useSelector(state => state.user.setting);
    const {t} = useTranslation();

    return (
        <>

            <IconButton
                varinat="text"
                color="secondary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiPaperclip
                    size={20}
                    color={darkMode ? "#e2e8f0" : "#475569"}
                />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >

                <MenuItem
                    onClick={() => console.log("file")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiFile
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.file")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    onClick={() => console.log("image")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiImage
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.image")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    onClick={() => console.log("voice")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiMusic
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.voice")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    onClick={() => console.log("location")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiMapPin
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.location")}
                    </Typography>

                </MenuItem>

            </Menu>

        </>
    )
}

const Text = () => {

    const {darkMode} = useSelector(state => state.user.setting);
    const {t} = useTranslation();

    return (
        <FormControl fullWidth>

            <OutlinedInput
                variant="outlined"
                color="primary"
                size="small"
                placeholder={t("input.message")}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            varinat="text"
                            color="secondary"
                        >
                            <FiSend
                                size={20}
                                color={darkMode ? "#e2e8f0" : "#475569"}
                            />
                        </IconButton>
                    </InputAdornment>
                }
            />

        </FormControl>
    )
}

const SendBar = () => {

    return (
        <Stack
            component="footer"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 70,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <Attachment/>

            <Text/>

        </Stack>
    )
}

export default SendBar;

