import {Box, Button, Stack, Typography} from "@mui/material";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {useTranslation} from "react-i18next";
import logo from "@/assets/images/logo.png";

const LanguagePart = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={2}
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
            padding={2}
        >

            <LazyLoadImage
                src={logo}
                alt="logo"
                width={80}
                height={60}
            />

            <Typography
                variant="h6"
                fontWeight="bold"
            >
                {t("welcome.language")}
            </Typography>

            <Button
                variant="contained"
                color="primary"
                startIcon={<FiChevronLeft size={16}/>}
                fullWidth
                onClick={() => console.log("next")}
            >
                {t("welcome.next_button")}
            </Button>

        </Stack>
    )
}

const Intro = () => {

    return (
        <LanguagePart/>
    )
}

export default Intro;