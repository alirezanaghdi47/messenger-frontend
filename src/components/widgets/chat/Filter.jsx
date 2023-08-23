// libraries
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Tab, Tabs} from "@mui/material";
import {FiFile, FiFilm, FiImage, FiMapPin, FiMusic} from "react-icons/fi";

const filterList = [
    {id: 1 , title: "menu.file", value: "file" , icon: <FiFile size={20}/>},
    {id: 2 , title: "menu.image", value: "image" , icon: <FiImage size={20}/>},
    {id: 3 , title: "menu.movie", value: "movie" , icon: <FiFilm size={20}/>},
    {id: 4 , title: "menu.music", value: "music" , icon: <FiMusic size={20}/>},
    {id: 5 , title: "menu.location", value: "location" , icon: <FiMapPin size={20}/>},
];

const Filter = ({value , onChange}) => {

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Tabs
                value={value}
                onChange={onChange}
                variant={isMobile ? "scrollable" : "fullWidth"}
                allowScrollButtonsMobile={isTablet}
                sx={{width: "100%"}}
            >

                {
                    filterList.map(filterItem =>
                        <Tab
                            label={t(filterItem.title)}
                        />
                    )
                }

            </Tabs>

        </Box>
    )
}

export default Filter;

