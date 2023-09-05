// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Button, Stack, Typography} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// components
import Header from "components/widgets/privacy/Header";
import EntryLockModal from "components/widgets/privacy/EntryLockModal";
import {useModal} from "components/hooks/useModal";
import SessionsModal from "./SessionsModal";

const Secure = () => {

    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const {
        isOpenModal: isOpenEntryLockModal,
        _handleShowModal: _handleShowEntryLockModal,
        _handleHideModal: _handleHideEntryLockModal
    } = useModal();

    const {
        isOpenModal: isOpenSessionsModal,
        _handleShowModal: _handleShowSessionsModal,
        _handleHideModal: _handleHideSessionsModal
    } = useModal();

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Header title="typography.security"/>

            <Stack
                component="ul"
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%"
                }}
            >

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="textSecondary"
                    >
                        {t("typography.entryLock")}
                    </Typography>

                    <Button
                        variant="text"
                        color="ternary"
                        endIcon={language === "fa" ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
                        onClick={_handleShowEntryLockModal}
                    >
                        {t("button.disable")}
                    </Button>

                </Stack>

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="textSecondary"
                    >
                        {t("typography.devices")}
                    </Typography>

                    <Button
                        variant="text"
                        color="ternary"
                        endIcon={language === "fa" ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
                        onClick={_handleShowSessionsModal}
                    >
                        3 {t("button.device")}
                    </Button>

                </Stack>

            </Stack>

            <EntryLockModal
                isOpen={isOpenEntryLockModal}
                onClose={_handleHideEntryLockModal}
            />

            <SessionsModal
                isOpen={isOpenSessionsModal}
                onClose={_handleHideSessionsModal}
            />

        </Stack>
    )
}

export default Secure;