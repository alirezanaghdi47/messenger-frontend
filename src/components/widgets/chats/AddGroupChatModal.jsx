// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {toast} from "react-hot-toast";
import {Button, IconButton, Modal, Stack, Typography, useMediaQuery} from "@mui/material";
import {FiCheck, FiX} from "react-icons/fi";

// components
import AvatarInput from "components/modules/AvatarInput";
import TextInput from "components/modules/TextInput";

// stores
import {hideModal, unSetStepper} from "stores/slices/appSlice";
import {useAddGroupChatMutation} from "stores/apis/chatApi";
import {insertChat} from "stores/slices/chatSlice";

// utils
import {addGroupChatSchema} from "utils/validations";

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
                {t("typography.createGroupChat")}
            </Typography>

            <IconButton
                variant="text"
                color="ternary"
                onClick={() => {
                    dispatch(unSetStepper());
                    dispatch(hideModal());
                }}
            >
                <FiX size={20}/>
            </IconButton>

        </Stack>
    )
}

const ModalContent = () => {

    const dispatch = useDispatch();
    const [addGroupChat, addGroupChatResponse] = useAddGroupChatMutation();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            avatar: {},
            name: "",
            description: "",
        },
        validationSchema: addGroupChatSchema,
        onSubmit: async (result) => {
            addGroupChat(result);
        }
    });

    useEffect(() => {
        if (addGroupChatResponse.status === "fulfilled") {
            if (addGroupChatResponse?.data?.status === "success"){
                dispatch(insertChat(addGroupChatResponse?.data?.data));
                dispatch(hideModal());
            } else {
                toast.error(addGroupChatResponse.data.message);
            }
        }
    }, [addGroupChatResponse]);

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
                height: "100%"
            }}
        >

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%"
                }}
            >

                <AvatarInput
                    label={t("input.avatar")}
                    name="avatar"
                    value={formik.values.avatar}
                    onChange={(value) => formik.setFieldValue("avatar", value)}
                    onBlur={() => formik.setFieldTouched("avatar")}
                    touched={formik.touched.avatar}
                    error={formik.errors.avatar}
                />

                <TextInput
                    label={t("input.name")}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("name")}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                />

                <TextInput
                    label={t("input.description")}
                    name="description"
                    rows={4}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("description")}
                    error={formik.errors.description}
                    touched={formik.touched.description}
                />

            </Stack>

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
                    onClick={() => {
                        dispatch(unSetStepper());
                        dispatch(hideModal());
                    }}
                >
                    {t("button.cancel")}
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<FiCheck size={20}/>}
                    onClick={() => formik.handleSubmit()}
                >
                    {t("button.submit")}
                </Button>

            </Stack>

        </Stack>
    )
}

const AddGroupChatModal = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={Boolean(modal?.isOpen && modal?.type === "addGroupChat")}
            onClose={() => {
                dispatch(unSetStepper());
                dispatch(hideModal());
            }}
            disableAutoFocus
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

export default AddGroupChatModal;