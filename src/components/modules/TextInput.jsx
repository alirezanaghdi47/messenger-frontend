// libraries
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
                       size = "small",
                       color = "primary",
                       variant = "outlined",
                       touched,
                       error,
                       disabled = false
                   }) => {

    return (
        <FormControl
            variant={variant}
            fullWidth
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
                variant={variant}
                color={color}
                size={size}
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
                        {error}
                    </Typography>
                )
            }

        </FormControl>
    )
}

export default TextInput;

