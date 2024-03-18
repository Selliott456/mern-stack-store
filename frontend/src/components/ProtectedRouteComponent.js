import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouteComponent = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouteComponent;
