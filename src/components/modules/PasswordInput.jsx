// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {InputAdornment, FormControl, Typography, TextField, IconButton} from "@mui/material";
import {FiEye, FiEyeOff} from "react-icons/fi";

const PasswordInput = ({
                           name,
                           label,
                           placeholder,
                           value,
                           onChange,
                           startIcon,
                           touched,
                           error,
                           onBlur,
                           disabled = false
                       }) => {

    const {t} = useTranslation();
    const [showPassword, setShowPassword] = useState(false);

    const _handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    }

    return (
        <FormControl
            variant="outlined"
            fullWidth
            onBlur={onBlur}
        >

            {
                label && (
                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="textSecondary"
                        gutterBottom
                    >
                        {label}
                    </Typography>
                )
            }

            <TextField
                variant="outlined"
                color="primary"
                size="small"
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                InputProps={{
                    name: name,
                    startAdornment: startIcon ? (
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    ) : null,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                variant="text"
                                color="ternary"
                                onClick={_handleTogglePassword}
                            >
                                {showPassword ? <FiEyeOff size={20}/> : <FiEye size={20}/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />

            {
                (touched && error) && (
                    <Typography
                        variant="caption"
                        fontWeight="bold"
                        color="error"
                        sx={{marginTop: 1}}
                    >
                        {t(error)}
                    </Typography>
                )
            }

        </FormControl>
    )
}

export default PasswordInput;

