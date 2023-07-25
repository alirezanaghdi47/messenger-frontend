// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {FormControl, InputAdornment, OutlinedInput,} from "@mui/material";
import {FiSearch} from "react-icons/fi";

const SearchBar = () => {

    const {darkMode} = useSelector(state => state.user.setting);
    const {t} = useTranslation();

    return (
        <FormControl fullWidth>

            <OutlinedInput
                variant="outlined"
                color="primary"
                size="small"
                placeholder={t("input.search")}
                endAdornment={
                    <InputAdornment position="end">
                        <FiSearch
                            size={20}
                            color={darkMode ? "#e2e8f0" : "#475569"}
                        />
                    </InputAdornment>
                }
            />

        </FormControl>
    )
}

export default SearchBar;

