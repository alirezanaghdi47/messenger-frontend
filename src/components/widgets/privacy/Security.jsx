// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from "@loadable/component";
import {Button, Stack, Typography, useMediaQuery} from "@mui/material";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

// components
import SwitchBox from "components/modules/SwitchBox";

// stores
import {showModal} from "stores/slices/app";
import {editVisibility} from "stores/slices/setting";

const LoginHistoryModal = Loadable(() => import("components/widgets/privacy/LoginHistoriesModal"));
const BlockedUsersModal = Loadable(() => import("components/widgets/privacy/BlockedUsersModal"));

const Security = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const {isVisible} = useSelector(state => state.setting.privacy);
    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: isTablet ? "calc(100dvh - 70px)" : "max-content",
                minHeight: isTablet ? "calc(100dvh - 70px)" : "100dvh",
                padding: 4,
                overflowY: "scroll",
            }}
            className="remove-scrollbar"
        >

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="textSecondary"
                >
                    {t("typography.devices")}
                </Typography>

                <Button
                    variant="text"
                    color="ternary"
                    endIcon={language === "fa" ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
                    onClick={() => dispatch(showModal({type: "loginHistories"}))}
                >
                    {t("button.show")}
                </Button>

            </Stack>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="textSecondary"
                >
                    {t("typography.blockedUsers")}
                </Typography>

                <Button
                    variant="text"
                    color="ternary"
                    endIcon={language === "fa" ? <FiChevronLeft size={20}/> : <FiChevronRight size={20}/>}
                    onClick={() => dispatch(showModal({type: "blockedUsers"}))}
                >
                    {t("button.show")}
                </Button>

            </Stack>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <SwitchBox
                    label={t("input.showStatus")}
                    name="status"
                    value={isVisible ? isVisible : false}
                    onChange={(e) => dispatch(editVisibility({isVisible: e.target.checked}))}
                />

            </Stack>

            {
                Boolean(modal?.isOpen && modal?.type === "loginHistories") && (
                    <LoginHistoryModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "blockedUsers") && (
                    <BlockedUsersModal/>
                )
            }

        </Stack>
    )
}

export default Security;