// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

// components
import HistoryModal from "components/widgets/chat/HistoryModal";

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

                <LazyLoadImage
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                    alt="avatar"
                    width={40}
                    height={40}
                    style={{borderRadius: "50%"}}
                />

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