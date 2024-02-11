// libraries
import {useTranslation} from "react-i18next";
import {Button, Snackbar, Typography, Stack, useMediaQuery, Slide} from "@mui/material";

// hooks
import {useServiceWorker} from "hooks/useServiceWorker";

const UpdatePwa = () => {

    const {t} = useTranslation();
    const {waitingWorker, showUpdateBanner, _handleUpdatePwa} = useServiceWorker();
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Snackbar
            anchorOrigin={{vertical: "bottom", horizontal: isMobile ? "center" : "right"}}
            open={Boolean(showUpdateBanner && waitingWorker)}
            TransitionComponent={props => <Slide {...props} direction="up" />}
        >

            <Stack
                direction="row"
                gap={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "common.black",
                    paddingX: 2,
                    paddingY: 2,
                    borderRadius: 1,
                    boxShadow: 2,
                }}
            >

                <Typography
                    variant="body2"
                    color="secondary.main"
                    fontWeight='bold'
                    textAlign="center"
                    sx={{width: "max-content"}}
                >
                    {t("typography.updatePwa")}
                </Typography>

                <Button
                    variant="text"
                    color="secondary"
                    onClick={_handleUpdatePwa}
                >
                    {t("button.update")}
                </Button>

            </Stack>

        </Snackbar>
    );
};

export default UpdatePwa;