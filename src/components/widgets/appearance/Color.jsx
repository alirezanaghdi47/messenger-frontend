// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Stack} from "@mui/material";
import {FiCheck} from "react-icons/fi";

// components
import Header from "components/widgets/appearance/Header";

// stores
import {useEditColorMutation} from "stores/apis/settingApi";
import {setColor} from "stores/slices/settingSlice";

const colorList = [
    {id: 1, color: {dark: "#60a5fa", light: "#2563eb"}},
    {id: 2, color: {dark: "#fb923c", light: "#d97706"}},
    {id: 3, color: {dark: "#e879f9", light: "#c026d3"}},
    {id: 4, color: {dark: "#22d3ee", light: "#0891b2"}},
];

const ColorItem = ({colorItem}) => {

    const dispatch = useDispatch();
    const {darkMode, color} = useSelector(state => state.setting.appearance);
    const [editColor , editColorResponse] = useEditColorMutation();

    const _handleEditColor = () => {
        editColor({color: colorItem.color});
    }

    useEffect(() => {
        if (editColorResponse.status === "fulfilled") {
            dispatch(setColor(editColorResponse.data));
        }
    }, [editColorResponse]);

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
            onClick={_handleEditColor}
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

