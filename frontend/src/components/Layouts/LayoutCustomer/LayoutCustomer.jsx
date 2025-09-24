import styles from "./LayoutCustomer.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";
import { CustomerStyles } from "../../GlobalStyles/GlobalStyles";
function LayoutCustomer() {
  return (
    <CustomerStyles>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Main>
            <Outlet />
          </Main>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </CustomerStyles>
  );
}
export default LayoutCustomer;
