// libraries
import { CookiesProvider } from 'react-cookie';

const Cookie = ({children}) => {
    return (
        <CookiesProvider>
            {children}
        </CookiesProvider>
    )
}

export default Cookie;