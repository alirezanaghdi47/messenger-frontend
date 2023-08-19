// libraries
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";

const CopyRight = () => {

    const {t} = useTranslation();
    
    return(
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                width: "100%",
            }}
        >

            <Typography
                variant="caption"
                color="textPrimary"
                fontWeight="bold"
            >
                {t("typography.copyRight")}
            </Typography>

        </Stack>
    )
}

export default CopyRight;