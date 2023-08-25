// libraries
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useCountdown} from 'usehooks-ts';
import {Button, Stack, Typography} from "@mui/material";
import {FiRotateCw} from "react-icons/fi";

const Timer = () => {

    const {t} = useTranslation();

    const [count, {startCountdown, resetCountdown}] =
        useCountdown({
            countStart: 120,
            intervalMs: 1000,
        });

    useEffect(() => {
        startCountdown();
    }, []);

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Typography
                variant="subtitle2"
                color="textPrimary"
                fontWeight='bold'
            >
                {t("typography.timeRemaining")}
            </Typography>

            {
                count === 0 ? (
                    <Button
                        variant="text"
                        color="primary"
                        startIcon={<FiRotateCw size={20}/>}
                        onClick={() => {
                            resetCountdown();
                            startCountdown();
                        }}
                    >
                        {t("button.restart")}
                    </Button>
                ) : (
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        fontWeight="bold"
                    >
                        {count}
                    </Typography>
                )
            }

        </Stack>
    )
}

export default Timer;