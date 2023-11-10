// libraries
import {useTranslation} from "react-i18next";
import {FormControl, FormControlLabel, Typography, styled} from "@mui/material";
import {Switch, switchClasses} from '@mui/base/Switch';

const switchStyle = styled('span')(({theme}) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  cursor: pointer;

  &.${switchClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchClasses.track} {
    background: ${theme.palette.secondary.main};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchClasses.thumb} {
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: ${theme.palette.text.secondary};
    position: relative;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  }

  &.${switchClasses.checked} {
    .${switchClasses.thumb} {
      left: 20px;
      top: 4px;
      background-color: #fff;
    }

    .${switchClasses.track} {
      background: ${theme.palette.primary.main}
    }
  }

  & .${switchClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  } `
);

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

    const {t} = useTranslation();
    const inputProps = {slotProps: {input: {name: name}}};

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
                        slots={{root: switchStyle}}
                        {...inputProps}
                    />
                }
                label={label}
                labelPlacement="start"
            />

            {
                (touched && error) && (
                    <Typography
                        variant="caption"
                        color="error"
                        fontWeight="bold"
                        style={{marginTop: 8}}
                    >
                        {t(error)}
                    </Typography>
                )
            }

        </FormControl>
    )
}

export default SwitchBox;