// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {IconButton} from "@mui/material";
import {FiSearch, FiX} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput.jsx";

// stores
import {setFilteredUsers , unSetFilteredUsers} from "stores/slices/chatSlice";

const SearchBar = () => {

    const dispatch = useDispatch();
    const {users , filteredUsers} = useSelector(state => state.chat);
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            search: "",
        },
        onSubmit: async (result) => {
            const regex = new RegExp(result.search , "gi");
            const filteredUsers = users.map(user => {
                return {
                    key: user?._id,
                    value: user?.userName,
                }
            });
            const filteredUsersIds = filteredUsers.filter(item => regex.test(item.value)).map(item => item.key);
            dispatch(setFilteredUsers(users.filter(user => filteredUsersIds.includes(user?._id))));
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
                filteredUsers.length > 0 && (
                    <IconButton
                        varinat="text"
                        color="error"
                        onClick={() => {
                            dispatch(unSetFilteredUsers());
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

export default SearchBar;