import {useEffect} from "react";

const PreventContextMenu = () => {

    const handleContextMenu = (e) => e.preventDefault();

    useEffect(() => {

        const appElement = document.getElementById('root');

        appElement.addEventListener('contextmenu', handleContextMenu);

        return () => appElement.removeEventListener('contextmenu', handleContextMenu);

    }, []);

}

export default PreventContextMenu;