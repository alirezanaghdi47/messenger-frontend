// libraries
import {useState} from "react";

export const useSegment = () => {

    const [segment, setSegment] = useState({
        data: null,
        active: 0,
    });

    const _handleSegment = (data) => setSegment(prevState => ({
        data: data ?? prevState?.data,
        active: prevState?.active
    }));

    const _handlePrevSegment = () => setSegment(prevState => ({
        data: prevState?.data,
        active: segment?.active - 1
    }));

    const _handleNextSegment = () => setSegment(prevState => ({
        data: prevState?.data,
        active: segment?.active + 1
    }));

    const _handleResetSegment = () => setSegment(prevState => ({
        data: null,
        active: 0
    }));

    return {segment, _handleNextSegment, _handlePrevSegment, _handleResetSegment , _handleSegment};

}

