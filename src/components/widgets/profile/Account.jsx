// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import SimpleBar from "simplebar-react";
import {useMediaQuery} from "@react-hooks-library/core";
import {Grid} from "@mui/material";

// components
import TextInput from "../../modules/TextInput.jsx";
import AvatarInput from "../../modules/AvatarInput.jsx";

// utils
import {editProfileSchema} from "../../../utils/validations.js";

const Account = () => {

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    const formik = useFormik({
        initialValues: {
            avatar: {},
            name: "",
            userName: "",
            phoneNumber: "",
            birthDay: "",
        },
        validationSchema: editProfileSchema,
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

            <Grid
                container
                rowSpacing={4}
                sx={{
                    width: "100%",
                    padding: 4,
                }}
            >

                <Grid
                    item
                    xs={12}
                >

                    <AvatarInput
                        label={t("input.avatar")}
                        name="avatar"
                        // preview={session?.user?.avatar}
                        value={formik.values.avatar}
                        onChange={(value) => formik.setFieldValue("avatar", value)}
                        onBlur={() => formik.setFieldTouched("avatar")}
                        touched={formik.touched.avatar}
                        error={formik.errors.avatar}
                    />

                </Grid>

                <Grid
                    item
                    xs={12}
                >

                    <TextInput
                        label={t("input.name")}
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={() => formik.setFieldTouched("name")}
                        error={formik.errors.name}
                        touched={formik.touched.name}
                    />

                </Grid>

                <Grid
                    item
                    xs={12}
                >

                    <TextInput
                        label={t("input.userName")}
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={() => formik.setFieldTouched("userName")}
                        error={formik.errors.userName}
                        touched={formik.touched.userName}
                    />

                </Grid>

                <Grid
                    item
                    xs={12}
                >

                    <TextInput
                        label={t("input.phoneNumber")}
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={() => formik.setFieldTouched("phoneNumber")}
                        error={formik.errors.phoneNumber}
                        touched={formik.touched.phoneNumber}
                    />

                </Grid>

                <Grid
                    item
                    xs={12}
                >

                    <TextInput
                        label={t("input.biography")}
                        name="biography"
                        rows={6}
                        value={formik.values.biography}
                        onChange={formik.handleChange}
                        onBlur={() => formik.setFieldTouched("biography")}
                        error={formik.errors.biography}
                        touched={formik.touched.biography}
                    />

                </Grid>

            </Grid>

        </SimpleBar>
    )
}

export default Account;

