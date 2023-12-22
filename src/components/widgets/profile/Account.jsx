// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, Stack, useMediaQuery} from "@mui/material";
import {FiCheck} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput.jsx";
import AvatarInput from "components/modules/AvatarInput.jsx";

// stores
import {useEditProfileMutation} from "stores/apis/settingApi";

// utils
import {editProfileSchema} from "utils/validations.js";

const Account = () => {

    const {avatar, userName, biography} = useSelector(state => state.setting.profile);
    const [editProfile] = useEditProfileMutation();
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatar: null,
            userName: userName ? userName : "",
            biography: biography ? biography : ""
        },
        validationSchema: editProfileSchema,
        onSubmit: async (result) => {
            editProfile({...result , preview: avatar});
        }
    });

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                width: "100%",
                height: isTablet ? "calc(100dvh - 70px)" : "max-content",
                minHeight: isTablet ? "calc(100dvh - 70px)" : "100dvh",
                padding: 4,
                overflowY: "scroll"
            }}
            className="remove-scrollbar"
        >

            <AvatarInput
                label={t("input.avatar")}
                name="avatar"
                preview={avatar}
                value={formik.values.avatar}
                onChange={(value) => formik.setFieldValue("avatar", value)}
                onBlur={() => formik.setFieldTouched("avatar")}
                touched={formik.touched.avatar}
                error={formik.errors.avatar}
            />

            <TextInput
                label={t("input.userName")}
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("userName")}
                error={formik.errors.userName}
                touched={formik.touched.userName}
            />

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

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FiCheck size={20}/>}
                    onClick={formik.handleSubmit}
                >
                    {t("button.submit")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default Account;

