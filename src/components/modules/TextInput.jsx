// libraries
import {OutlinedInput, InputAdornment, FormControl} from "@mui/material";

const TextInput = ({name, placeholder , value, onChange, startIcon , endIcon, size, color}) => {

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
                    endIcon ? (
                        <InputAdornment position="end">
                            {endIcon}
                        </InputAdornment>
                    ) : null
                }
                startAdornment={
                    startIcon ? (
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    ) : null
                }
            />

        </FormControl>
    )
}

export default TextInput;

