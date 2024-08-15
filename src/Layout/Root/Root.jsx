import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();

  const headFootNotShowing =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");

  return (
    <div>
      {headFootNotShowing || <Header></Header>}
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
      {headFootNotShowing || <Footer></Footer>}
    </div>
  );
};

export default Root;
