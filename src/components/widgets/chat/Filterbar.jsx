// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {alpha, Box, Grid, Typography, useTheme} from "@mui/material";

const filterList = [
    {_id: 1, title: "list.all", value: "all"},
    {_id: 2, title: "list.user", value: "user"},
    {_id: 3, title: "list.group", value: "group"},
];

const FilterItem = ({filter}) => {

    const {darkMode} = useSelector(state => state.user.setting);
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Grid
            component="li"
            item
            xs={4}
        >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    borderBottomWidth: filter._id === 1 ? 3 : 0,
                    borderBottomStyle: "solid",
                    borderBottomColor: filter._id ? "primary.main" : "",
                    padding: 1,
                    cursor: "pointer",
                    textDecoration: 'none'
                }}
                onClick={() => console.log(filter.value)}
            >

                <Typography
                    variant="subtitle2"
                    color={filter._id === 1 ? theme.palette.primary.main : "textPrimary"}
                    fontWeight='bold'
                >
                    {t(filter.title)}
                </Typography>

            </Box>

        </Grid>
    )
}

const Filterbar = () => {

    return (
        <Grid
            component="ul"
            container
            sx={{width: "100%"}}
        >

            {
                filterList.map(filterItem =>
                    <FilterItem
                        key={filterItem._id}
                        filter={filterItem}
                    />
                )
            }

        </Grid>
    )
}

export default Filterbar;