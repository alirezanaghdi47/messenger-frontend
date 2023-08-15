// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Box, Container, Stack, Typography} from "@mui/material";
import {useMediaQuery} from "@react-hooks-library/core";

// components
import SwitchBox from "@/components/modules/SwitchBox.jsx";

// stores
import {setNotification} from "@/stores/slices/profile.js";

const Alert = ({title, optionList}) => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.profile.setting);
    const {t} = useTranslation();
    const isDesktop = useMediaQuery('(max-width: 992px)');

    const formik = useFormik({
        initialValues: {
            chat: true,
            group: false,
            status: false,
            vibrate: false,
            voiceCall: true,
            videoCall: false,
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <Container
            maxWidth="md"
            disableGutters
            sx={{marginLeft: isDesktop ? "auto" : 0}}
        >

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "start",
                    alignItems: 'center',
                    width: "100%",
                    marginBottom: 2
                }}
            >

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight='bold'
                >
                    {t(title)}
                </Typography>

            </Box>

            <Stack
                direction="column"
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                {
                    optionList.map(optionItem =>
                        <SwitchBox
                            key={optionItem.id}
                            label={t(optionItem.title)}
                            name={optionItem.value}
                            value={formik.values[optionItem.value]}
                            onChange={formik.handleChange}
                        />
                    )
                }

                {/*<Stack*/}
                {/*    component="ul"*/}
                {/*    direction={language === "fa" ? "row" : "row-reverse"}*/}
                {/*    gap={2}*/}
                {/*    sx={{*/}
                {/*        display: "flex",*/}
                {/*        justifyContent: "start",*/}
                {/*        alignItems: 'center',*/}
                {/*        width: "100%",*/}
                {/*    }}*/}
                {/*>*/}

                {/*    {*/}
                {/*        optionList.map(optionItem =>*/}
                {/*            <Button*/}
                {/*                key={optionItem.id}*/}
                {/*                variant={optionItem.value === language ? "contained" : "text"}*/}
                {/*                color={optionItem.value === language ? "primary" : "ternary"}*/}
                {/*                startIcon={optionItem.icon}*/}
                {/*                onClick={() => dispatch(setNotification(optionItem.value))}*/}
                {/*            >*/}
                {/*                {t(optionItem.title)}*/}
                {/*            </Button>*/}
                {/*        )*/}
                {/*    }*/}

                {/*</Stack>*/}

            </Stack>

        </Container>
    )
}

export default Alert;

