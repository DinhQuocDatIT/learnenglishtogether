import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";
function LayoutCustomer() {
  return (
    <>
      <Header />
      <Main>
         <Outlet />
      </Main>
      <Footer></Footer>
    </>
  );
}
export default LayoutCustomer;
