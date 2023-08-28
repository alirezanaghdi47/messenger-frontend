import {useEffect} from "react";

const ContextMenu = () => {

    const handleContextMenu = (e) => e.preventDefault();

    useEffect(() => {
        const appElement = document.getElementById('root');
        appElement.addEventListener('contextmenu', handleContextMenu);
        return () => appElement.removeEventListener('contextmenu', handleContextMenu);
    }, []);

}

export default ContextMenu;