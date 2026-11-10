import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import PreLoader from "../components/PreLoader";

export default function PrivateWrapper({ allowedRoles = [] }) {
    const { isAuth, isLoading, userType } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <PreLoader />;
    }

    if (!isAuth) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(userType)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
}