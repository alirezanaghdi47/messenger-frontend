// libraries
import {useSelector} from "react-redux";
import {FormControl, FormControlLabel, Switch, Typography} from "@mui/material";

const SwitchBox = ({
                       label,
                       name,
                       value,
                       onChange,
                       error,
                       touched,
                       size = "small",
                       color = "primary",
                       variant = "outlined"
                   }) => {

    const {language} = useSelector(state => state.setting.appearance);

    return (
        <FormControl
            variant={variant}
            fullWidth
        >

            <FormControlLabel
                value="top"
                control={
                    <Switch
                        checked={value}
                        onChange={onChange}
                        inputProps={{name: name}}
                    />
                }
                label={label}
                labelPlacement={language === "fa" ? "start" : "end"}
            />

            {
                (touched && error) && (
                    <Typography
                        variant="caption"
                        color="error"
                        fontWeight="bold"
                        style={{marginTop: 8}}
                    >
                        {error}
                    </Typography>
                )
            }

        </FormControl>
    )
}

export default SwitchBox;