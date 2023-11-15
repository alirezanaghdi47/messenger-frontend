// libraries
import {useRef} from "react";
import {useTranslation} from "react-i18next"
import {Menu, MenuItem, Typography} from "@mui/material";
import toast from "react-hot-toast";
import {FiFile, FiFilm, FiImage, FiMapPin} from "react-icons/fi";

const AttachmentDropdownMenu = ({anchorEl, isOpen, onClose}) => {

    const {t} = useTranslation();

    const fileRef = useRef(null);
    const imageRef = useRef(null);
    const videoRef = useRef(null);

    const _handleSendFile = async (e) => {

        const file = await e.target.files[0];

        if (file.size > 50 * 1_024_000){
            toast.error(t("error.fileMaxSize"));
        } else {
            console.log(file);
        }

        fileRef.current.value = null;

    }

    const _handleSendImage = async (e) => {

        const file = await e.target.files[0];

        if (file.size > 5 * 1_024_000){
            toast.error(t("error.imageMaxSize"));
        } else {
            console.log(file);
        }

        imageRef.current.value = null;

    }

    const _handleSendVideo = async (e) => {

        const file = await e.target.files[0];

        if (file.size > 10 * 1_024_000){
            toast.error(t("error.videoMaxSize"));
        } else {
            console.log(file);
        }

        videoRef.current.value = null;

    }

    const _handleSendLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res) => {
                console.log(res.coords.latitude , res.coords.longitude);
            } , (err) => {
                toast.error(t("error.geoLocationFailed"));
            });
        } else {
            toast.error(t("error.geoLocationNotSupport"));
        }
    }

    return (
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
            open={isOpen}
            onClose={onClose}
        >

            {/* file */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={() => fileRef.current.click()}
            >

                <input
                    ref={fileRef}
                    type="file"
                    accept="application/pdf"
                    onChange={_handleSendFile}
                    style={{display: "none"}}
                />

                <FiFile size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.file")}
                </Typography>

            </MenuItem>

            {/* image */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={() => imageRef.current.click()}
            >

                <input
                    ref={imageRef}
                    type="file"
                    accept="image/*"
                    onChange={_handleSendImage}
                    style={{display: "none"}}
                />

                <FiImage size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.image")}
                </Typography>

            </MenuItem>

            {/* video */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={() => videoRef.current.click()}
            >

                <input
                    ref={videoRef}
                    type="file"
                    accept="video/*"
                    onChange={_handleSendVideo}
                    style={{display: "none"}}
                />
                
                <FiFilm size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.video")}
                </Typography>

            </MenuItem>

            {/* location */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={_handleSendLocation}
            >

                <FiMapPin size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.location")}
                </Typography>

            </MenuItem>

        </Menu>
    )
}

export default AttachmentDropdownMenu;

