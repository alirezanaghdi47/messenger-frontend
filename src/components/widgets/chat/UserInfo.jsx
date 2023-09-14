// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import LazyLoad from 'react-lazy-load';
import {Stack, Typography} from "@mui/material";

// components
const HistoryModal = Loadable(() => import("components/widgets/chat/HistoryModal"));

const UserInfo = () => {

    const {t} = useTranslation();

    const [showModal, setShowModal] = useState(false);

    const _handleShowModal = () => setShowModal(true);
    const _handleHideModal = () => setShowModal(false)

    return (
        <>

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "max-content",
                    cursor: "pointer"
                }}
                onClick={_handleShowModal}
            >

                <LazyLoad
                    width={40}
                    height={40}
                    threshold={0.5}
                >
                    <img
                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                        alt="avatar"
                        width={40}
                        height={40}
                        style={{borderRadius: "50%"}}
                    />
                </LazyLoad>

                <Stack
                    direction="column"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        fontWeight='bold'
                        noWrap
                    >
                        علیرضا نقدی
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                        noWrap
                    >
                        {t("typography.lastSeen")}
                        &nbsp;
                        11:11
                    </Typography>

                </Stack>

            </Stack>

            <HistoryModal
                isOpen={showModal}
                onClose={_handleHideModal}
            />

        </>
    )
}

export default UserInfo;