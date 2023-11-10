// libraries
import {CSSTransition} from 'react-transition-group';
import {forwardRef} from "react";

const PageTransition = forwardRef(({active , children , ...props} , ref) => {

    return (
        <CSSTransition
            nodeRef={ref}
            in={active}
            timeout={300}
            classNames="fade-in"
            mountOnEnter
            unmountOnExit
        >
            {children}
        </CSSTransition>
    )
})

export default PageTransition;