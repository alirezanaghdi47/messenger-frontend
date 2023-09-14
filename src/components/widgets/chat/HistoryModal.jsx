// libraries
import {useState} from "react";
import LazyLoad from 'react-lazy-load';
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Modal, Stack, Typography} from "@mui/material";
import {FiX} from "react-icons/fi";

// components
import Filter from "components/widgets/chat/Filter";
import History from "components/widgets/chat/History";
import Contacts from "components/widgets/chat/Contacts";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";

const ModalHeader = ({onClose}) => {

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

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                }}
            >

                <LazyLoad
                    width={40}
                    height={40}
                    threshold={0.5}
                >
                    <img
                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                        alt="avatar"
                        width={40}
                        height={40}
                        style={{borderRadius: "50%"}}
                    />
                </LazyLoad>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        fontWeight='bold'
                        noWrap
                    >
                        علیرضا نقدی
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textPrimary"
                        noWrap
                    >
                        Front End Developer
                    </Typography>

                </Stack>

            </Stack>

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

    const [filter, setFilter] = useState("file");

    const _handleActiveFilter = (value) => setFilter(value);

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

            <Filter
                filter={filter}
                onChange={_handleActiveFilter}
            />

            {
                filter !== "member" ? (
                    <History filter={filter}/>
                ) : (
                    <Contacts/>
                )
            }

            {/*<EmptyPlaceholder/>*/}

        </Stack>
    )
}

const HistoryModal = ({isOpen, onClose}) => {

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
                    width: isTablet ? "100%" : 640,
                    height: isTablet ? "100%" : "max-content",
                    bgcolor: "background.paper",
                    borderRadius: isTablet ? 0 : 1,
                    boxShadow: 1,
                    padding: 2,
                }}
            >

                <ModalHeader onClose={onClose}/>

                <ModalContent/>

            </Stack>

        </Modal>
    )
}

export default HistoryModal;