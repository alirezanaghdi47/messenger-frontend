// libraries
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useCookies} from "react-cookie";
import {useOnline} from '@react-hooks-library/core';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Modal, Stack, useMediaQuery, alpha, Typography, Button} from "@mui/material";
import {FiCheck, FiX} from "react-icons/fi";

const InstallPWA = () => {

    const [showBanner, setShowBanner] = useState(false);
    const [supportPWA, setSupportPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);
    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const [cookies, setCookie] = useCookies(["pwa-installer"]);
    const isOnline = useOnline();
    const isTablet = useMediaQuery('(max-width: 768px)');

    const beforeInstallPrompt = e => {
        e.preventDefault();
        setSupportPWA(true);
        setPromptInstall(e);
    };

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", beforeInstallPrompt);

        return () => window.removeEventListener("transitionend", beforeInstallPrompt);
    }, []);

    const _handleAccept = async (e) => {
        e.preventDefault();
        if (!promptInstall) return;
        const result = await promptInstall.prompt();

        if (result.outcome === "accepted") {
            setCookie("pwa-installer", "accepted");
        } else if (result.outcome === "dismissed") {
            setCookie("pwa-installer", "dismissed");
        }
    };

    const _handleReject = () => {
        setSupportPWA(false);
        setPromptInstall(null);
        setCookie("pwa-installer", "rejected");
    };

    useEffect(() => {
        setShowBanner(isOnline && isTablet && supportPWA && !cookies["pwa-installer"]);
    }, [isOnline, isTablet, supportPWA, cookies["pwa-installer"]]);

    if (!supportPWA) return null;

    return (
        <Modal
            open={showBanner}
            onClose={_handleReject}
            disableAutoFocus
            hideBackdrop
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: theme => alpha(theme.palette.ternary.main, 0.75),
                backdropFilter: "blur(10px)"
            }}
        >

            <Stack
                direction="column"
                gap={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    padding: 4,
                }}
            >

                <LazyLoadImage
                    src={darkMode ? "/images/pwa-dark.svg" : "/images/pwa-light.svg"}
                    alt="pwa"
                    visibleByDefault
                    effect="blur"
                    width="100%"
                    style={{maxWidth: 160}}
                />

                <Typography
                    variant="subtitle1"
                    color="secondary.main"
                    fontWeight='bold'
                    textAlign="center"
                    lineHeight={2}
                >
                    {t("typography.installPwa")}
                </Typography>

                <Stack
                    direction="row"
                    gap={2}
                >

                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<FiX size={20}/>}
                        onClick={_handleReject}
                    >
                        {t("button.reject")}
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<FiCheck size={20}/>}
                        onClick={_handleAccept}
                    >
                        {t("button.accept")}
                    </Button>

                </Stack>

            </Stack>

        </Modal>
    );
};

export default InstallPWA;