// libraries
import {useTranslation} from "react-i18next";
import SimpleBar from "simplebar-react";
import {useFormik} from "formik";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Header from "components/widgets/sound-notification/Header";
import SwitchBox from "components/modules/SwitchBox";

const Notice = () => {

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    const formik = useFormik({
        initialValues: {
            privateChat: false,
            groupChat: false,
            voiceCall: false,
            videoCall: false
        },
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <SimpleBar
            style={{
                width: "100%",
                height: isTablet ? "calc(100dvh - 80px)" : "100%"
            }}
        >

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%",
                    padding: 4,
                }}
            >

                <Header title="typography.notification"/>

                <Stack
                    component="ul"
                    direction="column"
                    gap={2}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "100%"
                    }}
                >

                    <Stack
                        direction="column"
                        gap={2}
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: "start",
                            width: "100%"
                        }}
                    >

                        <SwitchBox
                            label={t("input.privateChat")}
                            name="privateChat"
                            value={formik.values.privateChat}
                            onChange={formik.handleChange}
                            error={formik.errors.privateChat}
                            touched={formik.touched.privateChat}
                        />

                        <SwitchBox
                            label={t("input.groupChat")}
                            name="groupChat"
                            value={formik.values.groupChat}
                            onChange={formik.handleChange}
                            error={formik.errors.groupChat}
                            touched={formik.touched.groupChat}
                        />

                        <SwitchBox
                            label={t("input.voiceCall")}
                            name="voiceCall"
                            value={formik.values.voiceCall}
                            onChange={formik.handleChange}
                            error={formik.errors.voiceCall}
                            touched={formik.touched.voiceCall}
                        />

                        <SwitchBox
                            label={t("input.videoCall")}
                            name="videoCall"
                            value={formik.values.videoCall}
                            onChange={formik.handleChange}
                            error={formik.errors.videoCall}
                            touched={formik.touched.videoCall}
                        />

                    </Stack>

                </Stack>

            </Stack>

        </SimpleBar>
    )
}

export default Notice;