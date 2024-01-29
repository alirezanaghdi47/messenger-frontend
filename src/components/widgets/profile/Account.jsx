// libraries
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, Stack, useMediaQuery} from "@mui/material";
import {FiCheck} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput.jsx";
import AvatarInput from "components/modules/AvatarInput.jsx";

// stores
import {useEditProfileMutation} from "stores/apis/settingApi";
import {setProfile} from "stores/slices/settingSlice";

// utils
import {editProfileSchema} from "utils/validations.js";

const Account = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {avatar, biography} = useSelector(state => state.setting.profile);
    const [editProfile , editProfileResponse] = useEditProfileMutation();
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatar: {},
            biography: biography ? biography : "",
        },
        validationSchema: editProfileSchema,
        onSubmit: async (result) => {
            editProfile({...result , preview: avatar});
        }
    });

    useEffect(() => {
        if (editProfileResponse.isSuccess) {
            dispatch(setProfile(editProfileResponse.data));
            navigate("/setting");
        }
    }, [editProfileResponse]);

    return (
        <Stack
            direction="column"
            gap={2}
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
                label={t("input.biography")}
                name="biography"
                rows={4}
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

