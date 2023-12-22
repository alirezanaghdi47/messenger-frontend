// libraries
import {useSelector} from "react-redux";
import {Box, Stack} from "@mui/material";
import {FiCheck} from "react-icons/fi";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {useEditColorMutation} from "stores/apis/settingApi";

// utils
import {colorList} from "utils/constants.js";

const ColorItem = ({colorItem}) => {

    const {darkMode, color} = useSelector(state => state.setting.appearance);
    const [editColor] = useEditColorMutation();

    return (
        <Box
            component="li"
            sx={{
                position: "relative",
                width: 40,
                height: 40,
                background: darkMode ? colorItem.color.dark : colorItem.color.light,
                borderRadius: "50%",
                cursor: "pointer",
            }}
            onClick={() => editColor({color: colorItem.color})}
        >

            {
                colorItem.color.dark === color.dark ? (
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50% , -50%)",
                            zIndex: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 32,
                            height: 32,
                            bgcolor: "background.paper",
                            color: "primary.main",
                            borderRadius: "50%"
                        }}
                    >
                        <FiCheck size={24}/>
                    </Box>
                ) : null
            }

        </Box>
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
                    colorList.map(colorItem =>
                        <ColorItem
                            key={colorItem.id}
                            colorItem={colorItem}
                        />
                    )
                }

            </Stack>

        </Stack>
    )
}

export default Color;

