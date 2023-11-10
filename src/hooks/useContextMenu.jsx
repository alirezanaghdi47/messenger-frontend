// libraries
import {useEffect, useState} from "react";

export const useContextMenu = () => {

    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (e) => e.preventDefault();

    const _handleShowContextMenu = (e) => {
        e.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: e.clientX + 2,
                    mouseY: e.clientY - 6,
                }
                : null,
        );
    };

    const _handleHideContextMenu = () => setContextMenu(null);

    useEffect(() => {
        const appElement = document.getElementById('root');
        appElement.addEventListener('contextmenu', handleContextMenu);
        return () => appElement.removeEventListener('contextmenu', handleContextMenu);
    }, []);

    return {contextMenu , _handleShowContextMenu, _handleHideContextMenu};

}

