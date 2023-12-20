// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {IconButton} from "@mui/material";
import {FiSearch} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput.jsx";

const SearchBar = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            search: "",
        },
        onSubmit: async (result) => {
            console.log(result)
        }
    });

    return (
        <TextInput
            name="search"
            placeholder={t("input.search")}
            endIcon={
                <IconButton
                    varinat="text"
                    color="ternary"
                    onClick={formik.handleSubmit}
                >
                    <FiSearch size={20}/>
                </IconButton>
            }
            value={formik.values.search}
            onChange={formik.handleChange}
            error={formik.errors.search}
        />
    )
}

export default SearchBar;