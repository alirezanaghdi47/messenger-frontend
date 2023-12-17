// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from "@loadable/component";
import {useFormik} from "formik";
import {Button, Stack, Typography , useMediaQuery} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// components
import SwitchBox from "components/modules/SwitchBox";

// stores
import {showModal} from "stores/slices/app";

const EntryLockModal = Loadable(() => import("components/widgets/privacy/EntryLockModal"));
const DevicesModal = Loadable(() => import("components/widgets/privacy/DevicesModal"));
const BlockedUsersModal = Loadable(() => import("components/widgets/privacy/BlockedUsersModal"));

const Security = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

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
            className="remove-scrollbar"
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
                    onClick={() => dispatch(showModal({type: "devices"}))}
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
                    onClick={() => dispatch(showModal({type: "blockedUsers"}))}
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
                    onClick={() => dispatch(showModal({type: "entryLock"}))}
                >
                    {t("button.disable")}
                </Button>

            </Stack>

            {
                Boolean(modal?.isOpen && modal?.type === "devices") && (
                    <DevicesModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "blockedUsers") && (
                    <BlockedUsersModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "entryLock") && (
                    <EntryLockModal/>
                )
            }

        </Stack>
    )
}

export default Security;