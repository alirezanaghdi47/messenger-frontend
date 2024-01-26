// libraries
import {useSelector} from "react-redux";
import {Card, Grid, Grow, IconButton} from "@mui/material";

// utils
import {convertHexToEmoji} from "utils/functions";

export const emojiList = [
    "1F600", "1F601", "1F602", "1F923", "1F605", "1F609", "1F60D", "1F60E", "1F914", "1F611", "1F623", "1F625", "1F910", "1F614", "1F629", "1F632", "1F631", "1F621", "1F446", "1F447" , "1F44D" , "1F44F" , "1F496"
];

const GridItem = ({gridItem , onClick}) => {
    return (
        <Grid
            item
            xs={4}
        >
            <IconButton
                color="secondary"
                onClick={onClick}
            >
                {convertHexToEmoji(gridItem)}
            </IconButton>
        </Grid>
    )
}

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
                            <GridItem
                                key={index}
                                gridItem={emojiItem}
                                onClick={() => {
                                    setText(text + convertHexToEmoji(emojiItem) + " ");
                                    onClose()
                                }}
                            />
                        )
                    }

                </Grid>

            </Card>

        </Grow>
    )
}

export default EmojiDropdownMenu;