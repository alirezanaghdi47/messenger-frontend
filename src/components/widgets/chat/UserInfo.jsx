// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {formatDistanceToNow} from "date-fns";
import {faIR, enUS} from 'date-fns/locale';
import {Stack, Typography} from "@mui/material";

const UserInfo = ({data}) => {

    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "max-content",
            }}
        >

            <LazyLoadImage
                src={data.participantIds.find(item => item._id !== _id)?.avatar}
                alt="avatar"
                visibleByDefault
                effect="blur"
                width={40}
                height={40}
                style={{borderRadius: "50%"}}
            />

            <Stack
                direction="column"
                gap={1}
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
                    {data.participantIds.find(item => item._id !== _id)?.userName}
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                    noWrap
                >
                    {t("typography.lastSeen")}
                    &nbsp;
                    {
                        formatDistanceToNow(
                            data.participantIds.find(item => item._id !== _id)?.lastSeen,
                            {locale: language === "en" ? enUS : faIR, addSuffix: true}
                        )
                    }
                </Typography>

            </Stack>

        </Stack>
    )
}

export default UserInfo;