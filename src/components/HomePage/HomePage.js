import React from "react"
import { Navigate } from "react-router-dom";

const HomePage = () => {
    return (
        <Navigate to="/shops" replace/>
    )
}

export default HomePage