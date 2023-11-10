// libraries
import {useTranslation} from "react-i18next";
import {Box, FormControl, MenuItem, Select, Typography} from "@mui/material";
import {FiChevronDown} from "react-icons/fi";

const SelectBox = ({
                       name,
                       label,
                       placeholder,
                       value,
                       onChange,
                       error,
                       touched,
                       options,
                       icon,
                       size = "small",
                       color = "primary",
                       variant = "outlined",
                       disabled = false
                   }) => {

    const {t} = useTranslation();

    return (
        <FormControl
            variant={variant}
            fullWidth
        >

            <Typography
                variant="subtitle2"
                fontWeight="bold"
                color="textSecondary"
                gutterBottom
            >
                {label}
            </Typography>

            <Select
                color={color}
                size={size}
                variant={variant}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                IconComponent={FiChevronDown}
                disabled={disabled}
            >

                {
                    options?.length > 0 ? options.map(option =>
                        <MenuItem
                            key={option.id}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ) : (
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 16
                            }}
                        >

                            <Typography
                                variant="subtitle2"
                                color="textPrimary"
                                fontWeight="bold"
                            >
                                {t("menu.empty")}
                            </Typography>

                        </Box>
                    )
                }

            </Select>

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

export default SelectBox;