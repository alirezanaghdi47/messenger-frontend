// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Button, IconButton, Modal, Stack, Typography} from "@mui/material";
import {FiCheck, FiChevronLeft, FiChevronRight, FiX} from "react-icons/fi";

// components
import {useSegment} from "hooks/useSegment";
import SearchBar from "components/widgets/chats/Searchbar";
import Contacts from "components/widgets/chats/Contacts";
import Form from "components/widgets/chats/Form";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";

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
                {t("typography.createGroup")}
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

const ModalContent = ({segment}) => {

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

            {
                segment.active === 0 && (
                    <>
                        <SearchBar/>
                        <Contacts/>
                    </>
                )
            }

            {
                segment.active === 1 && (
                    <Form/>
                )
            }

            {/*<EmptyPlaceholder/>*/}

        </Stack>
    )
}

const ModalFooter = ({onClose , segment, onNext , onPrev}) => {

    const {language} = useSelector(state => state.setting.appearance);
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

            {
                segment.active === 0 && (
                    <>
                        <Button
                            variant="text"
                            color="ternary"
                            startIcon={<FiX size={20}/>}
                            onClick={onClose}
                        >
                            {t("button.cancel")}
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={language === "fa" ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
                            onClick={onNext}
                        >
                            {t("button.next")}
                        </Button>
                    </>
                )
            }

            {
                segment.active === 1 && (
                    <>
                        <Button
                            variant="text"
                            color="ternary"
                            startIcon={language === "fa" ? <FiChevronRight size={20}/> : <FiChevronLeft size={20}/>}
                            onClick={onPrev}
                        >
                            {t("button.prev")}
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FiCheck size={20}/>}
                            onClick={onClose}
                        >
                            {t("button.submit")}
                        </Button>
                    </>
                )
            }

        </Stack>
    )
}

const AddGroupModal = ({isOpen , onClose}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    const {segment , _handleNextSection , _handlePrevSection} = useSegment();

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

                <ModalContent segment={segment}/>

                <ModalFooter
                    segment={segment}
                    onNext={(data) => _handleNextSection(data)}
                    onPrev={(data) => _handlePrevSection(data)}
                    onClose={onClose}
                />

            </Stack>

        </Modal>
    )
}

export default AddGroupModal;