import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-between items-center">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} replace to="/login" />;

};

export default PrivateRoute;
