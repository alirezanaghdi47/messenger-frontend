// libraries
import { useState, useCallback, useEffect } from "react";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

export const useServiceWorker = () => {
    const [waitingWorker, setWaitingWorker] = useState(null);
    const [showUpdateBanner, setShowUpdateBanner] = useState(false);

    const _handleServiceWorkerUpdate = useCallback((registration) => {
        setShowUpdateBanner(true);
        setWaitingWorker(registration.waiting);
    }, []);

    const _handleUpdatePwa = useCallback(() => {
        waitingWorker?.postMessage({ type: "SKIP_WAITING" });
        setShowUpdateBanner(false);
        window.location.reload();
    }, [waitingWorker]);

    useEffect(() => {
        serviceWorkerRegistration.register({
            onUpdate: _handleServiceWorkerUpdate,
        });
    }, [_handleUpdatePwa]);

    return { showUpdateBanner, waitingWorker, _handleUpdatePwa };
};