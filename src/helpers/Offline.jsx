// libraries
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useOnline} from '@react-hooks-library/core';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Modal, Stack, useMediaQuery, alpha, Typography} from "@mui/material";

const Offline = () => {

    const [showBanner , setShowBanner] = useState(false);
    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const isOnline = useOnline();
    const isMobile = useMediaQuery('(max-width: 576px)');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowBanner(!isOnline);
        } , 1000);

        return () => clearTimeout(timeout);
    }, [isOnline]);

    return (
        <Modal
            open={showBanner}
            onClose={() => null}
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
                    width: isMobile ? "100%" : 480,
                    height: isMobile ? "100%" : "max-content",
                    padding: 4,
                }}
            >

                <LazyLoadImage
                    src={darkMode ? "/images/offline-dark.svg" : "/images/offline-light.svg"}
                    alt="pwa"
                    visibleByDefault
                    effect="blur"
                    width="100%"
                    style={{maxWidth: 240}}
                />

                <Typography
                    variant="h6"
                    color="secondary.main"
                    fontWeight='bold'
                >
                    {t("typography.offline")}
                </Typography>

            </Stack>

        </Modal>
    );
};

export default Offline;