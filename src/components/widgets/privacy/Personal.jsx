// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, Stack, Typography} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// components
import Header from "components/widgets/privacy/Header";
import BlockedUsersModal from "components/widgets/privacy/BlockedUsersModal";
import {useModal} from "components/hooks/useModal";
import SwitchBox from "components/modules/SwitchBox";

const Personal = () => {

    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const {isOpenModal, _handleShowModal, _handleHideModal} = useModal();

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
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Header title="typography.privacy"/>

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
                        {t("typography.blockedUsers")}
                    </Typography>

                    <Button
                        variant="text"
                        color="ternary"
                        endIcon={language === "fa" ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
                        onClick={_handleShowModal}
                    >
                        {t("button.all")}
                    </Button>

                </Stack>

            </Stack>

            <BlockedUsersModal
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </Stack>
    )
}

export default Personal;