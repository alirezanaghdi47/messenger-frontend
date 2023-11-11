// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, IconButton, Modal, Stack, Typography , useMediaQuery} from "@mui/material";
import {FiCheck, FiX} from "react-icons/fi";

// components
import PasswordInput from "components/modules/PasswordInput";

const ModalHeader = ({onClose}) => {

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
                onClick={onClose}
            >
                <FiX size={20}/>
            </IconButton>

        </Stack>
    )
}

const ModalContent = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            password: "",
            passwordRepeat: "",
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

        </Stack>
    )
}

const ModalFooter = ({onClose}) => {

    const {t} = useTranslation();

    return (
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
            >
                {t("button.cancel")}
            </Button>

            <Button
                variant="contained"
                color="primary"
                startIcon={<FiCheck size={20}/>}
            >
                {t("button.submit")}
            </Button>

        </Stack>
    )
}

const EntryLock = ({isOpen, onClose}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
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

                <ModalHeader onClose={onClose}/>

                <ModalContent/>

                <ModalFooter onClose={onClose}/>

            </Stack>

        </Modal>
    )
}

export default EntryLock;