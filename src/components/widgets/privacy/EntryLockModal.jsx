// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, IconButton, Modal, Stack, Typography , useMediaQuery} from "@mui/material";
import {FiCheck, FiX} from "react-icons/fi";

// components
import PasswordInput from "components/modules/PasswordInput";

// stores
import {hideModal} from "stores/slices/app";

// utils
import {addEntryLockSchema} from "utils/validations";

const ModalHeader = () => {

    const dispatch = useDispatch();
    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight='bold'
                noWrap
            >
                {t("typography.entryLock")}
            </Typography>

            <IconButton
                variant="text"
                color="ternary"
                onClick={() => dispatch(hideModal())}
            >
                <FiX size={20}/>
            </IconButton>

        </Stack>
    )
}

const ModalContent = () => {

    const dispatch = useDispatch();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            password: "",
            passwordRepeat: "",
        },
        validationSchema: addEntryLockSchema,
        onSubmit: async (data) => {
            console.log(data);
            dispatch(hideModal());
        }
    });

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <PasswordInput
                label={t("input.password")}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("password")}
                error={formik.errors.password}
                touched={formik.touched.password}
            />

            <PasswordInput
                label={t("input.passwordRepeat")}
                name="passwordRepeat"
                value={formik.values.passwordRepeat}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("passwordRepeat")}
                error={formik.errors.passwordRepeat}
                touched={formik.touched.passwordRepeat}
            />

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "auto"
                }}
            >

                <Button
                    variant="text"
                    color="ternary"
                    startIcon={<FiX size={20}/>}
                    onClick={() => dispatch(hideModal())}
                >
                    {t("button.cancel")}
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FiCheck size={20}/>}
                    onClick={formik.handleSubmit}
                >
                    {t("button.submit")}
                </Button>

            </Stack>

        </Stack>
    )
}

const EntryLock = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={Boolean(modal?.isOpen && modal?.type === "entryLock")}
            onClose={() => dispatch(hideModal())}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    width: isTablet ? "100%" : 480,
                    height: isTablet ? "100%" : "max-content",
                    bgcolor: "background.paper",
                    borderRadius: isTablet ? 0 : 1,
                    boxShadow: 1,
                    padding: 2,
                }}
            >

                <ModalHeader/>

                <ModalContent/>

            </Stack>

        </Modal>
    )
}

export default EntryLock;