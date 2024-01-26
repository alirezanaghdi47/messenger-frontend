// libraries
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useOrientation} from "@uidotdev/usehooks";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {alpha, Modal, Stack, Typography} from "@mui/material";

const PreventOrientation = () => {

    const [showBanner , setShowBanner] = useState(false);
    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const {angle , type} = useOrientation();
    const isOriented = angle === 90 && type === "landscape-primary";

    useEffect(() => {
        setShowBanner(isOriented);
    }, [isOriented]);

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
                    width: "100%",
                    height: "100%",
                    padding: 4,
                }}
            >

                <LazyLoadImage
                    src={darkMode ? "/images/orientation-dark.svg" : "/images/orientation-light.svg"}
                    alt="orientation"
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
                    {t("typography.preventOrientation")}
                </Typography>

            </Stack>

        </Modal>
    )
}

export default PreventOrientation;