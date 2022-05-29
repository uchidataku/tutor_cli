import { Route, Routes } from "react-router-dom";
import routes from "../constants/routes";
import SignInPage from "../components/pages/SignInPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path={routes.top()} element={<SignInPage />} />
            <Route path={routes.signIn()} element={<SignInPage />} />
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
}

export default PageRoutes;