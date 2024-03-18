import { Outlet } from "react-router-dom";
import UserChatComponent from "../pages/user/UserChatComponent";

const RoutesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};
export default RoutesWithUserChatComponent;
