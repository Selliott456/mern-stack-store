import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouteComponent = (admin) => {
  let auth = false;

  if (admin) {
    let adminAuth = true;
    if (adminAuth) auth = true;
  } else {
    let userAuth = true;
    if (userAuth) auth = true;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouteComponent;
