// libraries
import Loadable from '@loadable/component';
import {IconButton, useMediaQuery} from "@mui/material";
import {FiPlus} from "react-icons/fi";

// components
import {useModal} from "hooks/useModal";
const AddChatModal = Loadable(() => import("components/widgets/chats/AddChatModal"));

const ActionButton = () => {

    const isDesktop = useMediaQuery('(max-width: 992px)');

    const {
        isOpenModal: addChatIsOpenModal,
        _handleShowModal: _handleShowAddChatModal,
        _handleHideModal: _handleHideAddChatModal
    } = useModal();

    return (
        <>

            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={_handleShowAddChatModal}
                sx={{
                    position: 'absolute',
                    zIndex: 25,
                    left: isDesktop ? "calc(100% - 60px)" : "calc(360px - 60px)",
                    bottom: 16
                }}
            >
                <FiPlus size={20}/>
            </IconButton>

            <AddChatModal
                isOpen={addChatIsOpenModal}
                onClose={_handleHideAddChatModal}
            />

        </>
    )
}

export default ActionButton;

