// libraries
import {useTranslation} from "react-i18next";
import {Button, Stack} from "@mui/material";
import {FaGoogle} from "react-icons/fa6";

const Form = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}
        >

            <Button
                variant="contained"
                color="error"
                startIcon={<FaGoogle size={20}/>}
                onClick={() => window.open("http://localhost:4000/api/auth/google" , "_self")}
            >
                {t("button.google")}
            </Button>

        </Stack>
    )
}

export default Form;