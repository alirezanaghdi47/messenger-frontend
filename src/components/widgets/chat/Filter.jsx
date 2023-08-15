// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Box, Tab, Tabs} from "@mui/material";

const filterList = [
    {_id: 1, title: "list.all", value: "all"},
    {_id: 2, title: "list.private", value: "private"},
    {_id: 3, title: "list.group", value: "group"},
];

const Filter = () => {

    const {t} = useTranslation();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{width: "100%"}}
        >

            <Tabs
                variant="fullWidth"
                scrollButtons
                allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
            >

                {
                    filterList.map(filterItem =>
                        <Tab
                            key={filterItem._id}
                            label={t(filterItem.title)}
                        />
                    )
                }

            </Tabs>

        </Box>
    )
}

export default Filter;
