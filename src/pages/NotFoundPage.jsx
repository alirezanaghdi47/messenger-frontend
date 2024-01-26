// components
import Error from "components/widgets/not-found/Error";

// layouts
import TernaryLayout from "layouts/TernaryLayout.jsx";

const NotFoundPage = () => {

    return (
        <TernaryLayout>
            <Error/>
        </TernaryLayout>
    )
}

export default NotFoundPage;