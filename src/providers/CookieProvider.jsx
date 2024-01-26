// libraries
import { CookiesProvider as ReactCookieProvider } from 'react-cookie';

const CookieProvider = ({children}) => {
    return (
        <ReactCookieProvider>
            {children}
        </ReactCookieProvider>
    )
}

export default CookieProvider;