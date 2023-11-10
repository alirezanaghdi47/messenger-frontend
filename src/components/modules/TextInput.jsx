// libraries
import {useTranslation} from "react-i18next";
import {InputAdornment, FormControl, Typography, TextField} from "@mui/material";

const TextInput = ({
                       name,
                       label,
                       placeholder,
                       value,
                       onChange,
                       startIcon,
                       endIcon,
                       rows = 1,
                       touched,
                       error,
                       onBlur,
                       disabled = false
                   }) => {

    const {t} = useTranslation();

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
                placeholder={placeholder}
                InputProps={{
                    name: name,
                    startAdornment: startIcon ? (
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    ) : null,
                    endAdornment: endIcon ? (
                        <InputAdornment position="end">
                            {endIcon}
                        </InputAdornment>
                    ) : null
                }}
                value={value}
                multiline={rows > 1}
                rows={rows}
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

export default TextInput;

