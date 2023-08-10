// libraries
import {MobileDatePicker} from "@mui/x-date-pickers";
import {useLocaleText} from "@mui/x-date-pickers/internals";
import {Button, FormControl, Typography, Stack} from "@mui/material";
import {FiX, FiCheck} from "react-icons/fi";

// utils
import {getDateFromIsoString, getIsoStringFromDate} from "@/utils/functions";
import {useTranslation} from "react-i18next";

const CustomActionBar = ({onAccept, onCancel, actions}) => {

    const localeText = useLocaleText();

    if (actions === null || actions.length === 0) {
        return null;
    }

    const actionButtons = actions?.map((actionType) => {
        switch (actionType) {
            case 'cancel':
                return (
                    <Button
                        key={actionType}
                        variant="text"
                        color="secondary"
                        startIcon={<FiX size={16}/>}
                        onClick={onCancel}
                    >
                        {localeText.cancelButtonLabel}
                    </Button>
                );
            case 'accept':
                return (
                    <Button
                        key={actionType}
                        variant="contained"
                        color="primary"
                        startIcon={<FiCheck size={16}/>}
                        onClick={onAccept}
                    >
                        {localeText.okButtonLabel}
                    </Button>
                );
            default:
                return null;
        }
    });

    return (
        <Stack
            direction='row'
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: 'center'
            }}
        >
            {actionButtons}
        </Stack>
    );
}

const DatePicker = ({
                        label,
                        name,
                        value,
                        onChange,
                        error,
                        touched,
                        placeholder,
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
                color="textSecondary"
                fontWeight="bold"
                gutterBottom
            >
                {label}
            </Typography>

            <MobileDatePicker
                value={value ? getIsoStringFromDate(value) : null}
                onChange={(value) => onChange(getDateFromIsoString(value))}
                format="yyyy/MM/dd"
                localeText={{
                    cancelButtonLabel: t("button.cancel"),
                    okButtonLabel: t("button.submit"),
                    toolbarTitle: '',
                    fieldYearPlaceholder: () => "",
                    fieldMeridiemPlaceholder: () => "",
                    fieldMonthPlaceholder: () => "",
                    fieldDayPlaceholder: () => "",
                }}
                dayOfWeekFormatter={(day) => {
                    switch (day) {
                        case "ش":
                            return "ش";
                        case "1ش":
                            return "ی";
                        case "2ش":
                            return "د";
                        case "3ش":
                            return "س";
                        case "4ش":
                            return "چ";
                        case "5ش":
                            return "پ";
                        case "ج":
                            return "ج";
                        default:
                            return null;
                    }
                }}
                disabled={disabled}
                slots={{actionBar: CustomActionBar}}
                slotProps={{
                    textField: {
                        color: color,
                        variant: variant,
                        size: size,
                        placeholder: placeholder,
                        name: name,
                    },
                    actionBar: {
                        actions: ['cancel', 'accept']
                    }
                }}
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

export default DatePicker;