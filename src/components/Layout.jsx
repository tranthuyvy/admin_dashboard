import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Routers from "../routers/Routers.jsx";

const Layout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const isForgotPasswordPage = location.pathname === "/forgotPassword";
  const isIndexPage = location.pathname === "/";

  if (isIndexPage || isLoginPage || isSignupPage || isForgotPasswordPage) {
    return (
      <div>
        <Routers />
      </div>
    );
  }

  return (
    <div className="flex flex-row h-screen w-screen bg-bgPrimary">
      <Sidebar />
      <div className="flex-1 w-[80%] overflow-x-hidden">
        <Header />
        <div className="p-4">
          <Routers />
        </div>
      </div>
    </div>
  );
};

export default Layout;
