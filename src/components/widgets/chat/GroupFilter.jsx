// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {FormControl, InputAdornment, OutlinedInput,} from "@mui/material";
import {FiMessageCircle, FiSearch, FiUser} from "react-icons/fi";
import {LuContact, LuDisc} from "react-icons/lu";

const footerLinks = [
    {id: 1, title: "typography.chat", href: "/chat", icon: <FiMessageCircle size={20}/>},
    {id: 2, title: "typography.status", href: "/status", icon: <LuDisc size={20}/>},
    {id: 3, title: "typography.contact", href: "/contact", icon: <LuContact size={20}/>},
    {id: 4, title: "typography.profile", href: "/profile", icon: <FiUser size={20}/>},
];

const GroupFilter = () => {

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

export default GroupFilter;