// libraries
import {useState} from "react";

export const useSegment = () => {

    const [segment, setSegment] = useState({
        data: null,
        active: 0,
    });

    const _handleNextSection = (data) => setSegment({
        data: data ?? segment.data,
        active: segment.active + 1
    });

    const _handlePrevSection = (data) => setSegment({
        data: data ?? segment.data,
        active: segment.active - 1
    });

    return {segment , _handleNextSection, _handlePrevSection};

}

