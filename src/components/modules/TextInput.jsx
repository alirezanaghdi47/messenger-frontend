// libraries
import {IconButton, OutlinedInput, InputAdornment, FormControl} from "@mui/material";

const TextInput = ({name, placeholder , value, onChange, icon, iconPosition, onSubmit, size, color}) => {

    return (
        <FormControl fullWidth>

            <OutlinedInput
                variant="outlined"
                color={color}
                size={size}
                placeholder={placeholder}
                inputProps={{
                    name: name
                }}
                value={value}
                onChange={onChange}
                endAdornment={
                    iconPosition === "end" ? (
                        <InputAdornment position="end">
                            <IconButton
                                varinat="text"
                                color="secondary"
                                onClick={onSubmit}
                            >
                                {icon}
                            </IconButton>
                        </InputAdornment>
                    ) : null
                }
                startAdornment={
                    iconPosition === "start" ? (
                        <InputAdornment position="start">
                            <IconButton
                                varinat="text"
                                color="secondary"
                                onClick={onSubmit}
                            >
                                {icon}
                            </IconButton>
                        </InputAdornment>
                    ) : null
                }
            />

        </FormControl>
    )
}

export default TextInput;

