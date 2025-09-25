import { Link } from "react-router";

import styles from "./Header.module.css";
import logoWebsite from "../../../../assets/logo/logo_website.svg";
import Button from "../../../Shared/Button/Button";
function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.brand}>
        <Link to="/">
          <img className={styles.logo} src={logoWebsite} alt="English Learning Logo" />
          <span className={styles.nameBrand}>English</span>
        </Link>
      </div>
      <nav className={styles.navbar}>
        <Link to="/">Trang chủ</Link>
        <Link to="/">Khóa học</Link>
        <Link to="/">Bài viết</Link>
      </nav>
      <div className={styles.action}>
        <div className={styles.noAccount}>
          <Button primary>Đăng nhập</Button>
          <Button text registerBtn>
            Đăng ký
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
