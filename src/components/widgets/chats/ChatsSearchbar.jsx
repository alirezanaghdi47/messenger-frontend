// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {IconButton} from "@mui/material";
import {FiSearch, FiX} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput.jsx";

// stores
import {setFilteredChats, unSetFilteredChats} from "stores/slices/chatSlice";

const ChatsSearchbar = () => {

    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {chats , filteredChats} = useSelector(state => state.chat);
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            search: "",
        },
        onSubmit: async (result) => {
            const regex = new RegExp(result.search , "gi");
            const filteredChats = chats.map(chat => {
                if (Object.hasOwn(chat , "groupId")){
                    return {
                        key: chat?._id,
                        value: chat?.groupId?.name,
                    }
                } else {
                    return {
                        key: chat?._id,
                        value: chat.participantIds.find(user => user?._id !== _id)?.userName
                    };
                }
            });
            const filteredChatsIds = filteredChats.filter(item => regex.test(item.value)).map(item => item.key);
            dispatch(setFilteredChats(chats.filter(chat => filteredChatsIds.includes(chat?._id))));
        }
    });

    return (
        <TextInput
            name="search"
            placeholder={t("input.search")}
            startIcon={
                <IconButton
                    varinat="text"
                    color="ternary"
                    onClick={formik.handleSubmit}
                >
                    <FiSearch size={20}/>
                </IconButton>
            }
            endIcon={
                filteredChats.length > 0 && (
                    <IconButton
                        varinat="text"
                        color="error"
                        onClick={() => {
                            dispatch(unSetFilteredChats());
                            formik.handleReset();
                        }}
                    >
                        <FiX size={20}/>
                    </IconButton>
                )
            }
            value={formik.values.search}
            onChange={formik.handleChange}
            error={formik.errors.search}
        />
    )
}

export default ChatsSearchbar;