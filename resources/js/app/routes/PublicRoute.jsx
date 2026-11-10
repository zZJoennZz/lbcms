import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import PreLoader from "../components/PreLoader";

export default function PublicWrapper({ redirectTo = "/dashboard" }) {
    const { isAuth, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) return <PreLoader />;

    const destination = location.state?.from?.pathname || redirectTo;

    return !isAuth ? <Outlet /> : <Navigate to={destination} replace />;
}