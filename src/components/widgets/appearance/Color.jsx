// libraries
import {useDispatch, useSelector} from "react-redux";
import {Box, Stack} from "@mui/material";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {setColor} from "stores/slices/setting.js";

// utils
import {colorList} from "utils/constants.js";

const ColorItem = ({colorItem , index}) => {

    const dispatch = useDispatch();
    const {darkMode , color} = useSelector(state => state.setting.appearance);

    const _handleActiveColor = (index) => dispatch(setColor(index));

    return (
        <Box
            component="li"
            sx={{
                opacity: color.dark === colorItem.color.dark ? 1: 0.5,
                width: 40,
                height: 40,
                background: darkMode ? colorItem.color.dark : colorItem.color.light,
                borderRadius: "50%",
                cursor: "pointer",
            }}
            onClick={() => _handleActiveColor(index)}
        />
    )
}

const Color = () => {

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Header title="typography.color"/>

            <Stack
                component="ul"
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                {
                    colorList.map((colorItem, index) =>
                       <ColorItem
                           key={colorItem.id}
                           colorItem={colorItem}
                           index={index}
                       />
                    )
                }

            </Stack>

        </Stack>
    )
}

export default Color;

