// libraries
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, IconButton, Modal, Stack, Typography , useMediaQuery} from "@mui/material";
import {FiCheck, FiChevronLeft, FiChevronRight, FiX} from "react-icons/fi";

// components
import AvatarInput from "components/modules/AvatarInput";
import TextInput from "components/modules/TextInput";
import UsersSearchbar from "components/widgets/chats/UsersSearchbar";
import Contacts from "components/widgets/chats/Contacts";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";

// providers
import {SocketContext} from "providers/Socket";

// stores
import {hideModal, setStepper, unSetStepper} from "stores/slices/appSlice";
import {useAddGroupMutation, useGetAllUserQuery} from "stores/apis/chatApi";

// utils
import {addGroupSchema} from "utils/validations";

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
                {t("typography.createGroup")}
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
    const {stepper} = useSelector(state => state.app);
    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const {users, filteredUsers} = useSelector(state => state.chat);
    useGetAllUserQuery();
    const [addGroup, addGroupResponse] = useAddGroupMutation();
    const {t} = useTranslation();
    const {socket} = useContext(SocketContext);

    const formik = useFormik({
        initialValues: {
            avatar: {},
            name: "",
            description: "",
        },
        validationSchema: addGroupSchema,
        onSubmit: async (result) => {
            dispatch(setStepper({step: 1 , data: {...result , participantIds: []}}));
        }
    });

    useEffect(() => {

        if (addGroupResponse.isSuccess) {
            dispatch(unSetStepper());
            dispatch(hideModal());
        }

        if (addGroupResponse.status === "fulfilled" && addGroupResponse?.data) {
            socket?.current?.emit("addChat", {
                userId: _id,
                chat: addGroupResponse?.data,
                receiverIds: addGroupResponse?.data?.participantIds.filter(user => user._id !== _id).map(item => item._id),
                socketId: socket?.current?.id
            });
        }

    }, [addGroupResponse]);

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

            {
                stepper.step === 0 && (
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
                            // preview={session?.user?.avatar}
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
                )
            }

            {
                stepper.step === 1 && (
                    <>
                        <UsersSearchbar/>
                        {
                            (filteredUsers.length > 0 || users.length > 0) ? (
                                <Contacts/>
                            ) : (
                                <EmptyPlaceholder/>
                            )
                        }
                    </>
                )
            }

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

                {
                    stepper.step === 0 && (
                        <>
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
                                endIcon={language === "fa" ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
                                onClick={() => formik.handleSubmit()}
                            >
                                {t("button.next")}
                            </Button>
                        </>
                    )
                }

                {
                    stepper.step === 1 && (
                        <>
                            <Button
                                variant="text"
                                color="ternary"
                                startIcon={language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
                                onClick={() => dispatch(setStepper({step: 0 , data: stepper.data}))}
                            >
                                {t("button.prev")}
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<FiCheck size={20}/>}
                                onClick={() => addGroup(stepper.data)}
                            >
                                {t("button.submit")}
                            </Button>
                        </>
                    )
                }

            </Stack>

        </Stack>
    )
}

const AddGroupModal = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={Boolean(modal?.isOpen && modal?.type === "createGroup")}
            onClose={() => {
                dispatch(unSetStepper());
                dispatch(hideModal());
            }}
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

export default AddGroupModal;