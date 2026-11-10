import { useMemo } from "react";
import { AuthContext } from "./contexts/AuthContext";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import PreLoader from './components/PreLoader';
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
    let isAuth = false;
    const contextValue = useMemo(
        () => ({
            isAuth,
        }),
        [
            isAuth,
        ]
    );

    return <AuthContext.Provider value={contextValue}>
                <Suspense fallback={<PreLoader />}>
                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route path="/" element={<div>ASDASD</div>} />
                        </Route>
                    </Routes>
                </Suspense>
            </AuthContext.Provider>;
}