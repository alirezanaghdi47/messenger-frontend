// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from "@loadable/component";
import {useFormik} from "formik";
import {Button, Stack, Typography , useMediaQuery} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// components
import {useModal} from "hooks/useModal";
import SwitchBox from "components/modules/SwitchBox";

const EntryLockModal = Loadable(() => import("components/widgets/privacy/EntryLockModal"));
const SessionsModal = Loadable(() => import("components/widgets/privacy/SessionsModal"));
const BlockedUsersModal = Loadable(() => import("components/widgets/privacy/BlockedUsersModal"));

const Security = () => {

    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

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

    const {
        isOpenModal: isOpenBlockedUserModal,
        _handleShowModal: _handleShowBlockedUserModal,
        _handleHideModal: _handleHideBlockedUserModal
    } = useModal();

    const formik = useFormik({
        initialValues: {
            status: false,
        },
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: isTablet ? "calc(100dvh - 70px)" : "max-content",
                minHeight: isTablet ? "calc(100dvh - 70px)" : "100dvh",
                padding: 4,
                overflowY: "scroll",
            }}
            className="custom-scrollbar"
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
                    {t("typography.blockedUsers")}
                </Typography>

                <Button
                    variant="text"
                    color="ternary"
                    endIcon={language === "fa" ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
                    onClick={_handleShowBlockedUserModal}
                >
                    {t("button.all")}
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

                <SwitchBox
                    label={t("input.showStatus")}
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    error={formik.errors.status}
                    touched={formik.touched.status}
                />

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

            <EntryLockModal
                isOpen={isOpenEntryLockModal}
                onClose={_handleHideEntryLockModal}
            />

            <SessionsModal
                isOpen={isOpenSessionsModal}
                onClose={_handleHideSessionsModal}
            />

            <BlockedUsersModal
                isOpen={isOpenBlockedUserModal}
                onClose={_handleHideBlockedUserModal}
            />

        </Stack>
    )
}

export default Security;