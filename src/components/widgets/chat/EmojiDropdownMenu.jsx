// libraries
import {useSelector} from "react-redux";
import {Card, Grid, Grow, IconButton} from "@mui/material";

// utils
import {convertHexToEmoji} from "utils/functions";
import {emojiList} from "utils/constants";

const EmojiDropdownMenu = ({isOpen, onClose, text, setText}) => {

    const {language} = useSelector(state => state.setting.appearance);

    return (
        <Grow
            in={isOpen}
            style={{transformOrigin: language === "fa" ? 'bottom right' : 'bottom left'}}
        >

            <Card
                sx={{
                    position: "absolute",
                    zIndex: 300,
                    bottom: 36,
                    left: 0,
                    width: 180,
                    height: 180,
                    overflowY: "scroll"
                }}
                className="custom-scrollbar"
            >

                <Grid container>
                    {
                        emojiList.map((emojiItem , index) =>
                            <Grid
                                key={index}
                                item
                                xs={4}
                            >
                                <IconButton
                                    color="secondary"
                                    onClick={() => {
                                        setText(text + convertHexToEmoji(emojiItem) + " ");
                                        onClose()
                                    }}
                                >
                                    {convertHexToEmoji(emojiItem)}
                                </IconButton>
                            </Grid>
                        )
                    }

                </Grid>

            </Card>

        </Grow>
    )
}

export default EmojiDropdownMenu;