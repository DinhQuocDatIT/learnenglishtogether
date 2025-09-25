import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare ,faSquareFacebook} from "@fortawesome/free-brands-svg-icons";
import {faBuilding,faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";
import logoWebsite from '../../../../assets/logo/logo_website.svg';
function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.brand}>
              <Link to="/">
                  <img className={styles.logo} src={logoWebsite} alt="English Learning Logo" />
                  <span className={styles.nameBrand}>English</span>
              </Link>
          </div>
          <div className={styles.introduce}>
            <p>
                CodeLearn là nền tảng tương tác trực tuyến hỗ trợ người dùng học
                tập, thực hành, thi đấu và đánh 200.000đ kỹ năng lập trình một
                cách nhanh chóng và chính xác.
            </p>
          </div>  
          <div className={styles.socialItem}>
               <a href="#"><FontAwesomeIcon icon={faSquareFacebook} className={styles.iconFb}/></a>
                <a href="#"><FontAwesomeIcon icon={faInstagramSquare} className={styles.iconIng}/> </a>
          </div>
        </div>
        <div className={styles.item}>
          <h4>Chăm sóc khách hàng</h4>
          <div><Link to="#">Quy trình sử dụng dịch vụ</Link></div>
          <div><Link to="#">Chính sách bảo hành</Link></div>
          <div><Link to="#">Chính sách hoàn trả hàng</Link></div>
          <div><Link to="#">Chính sách bảo mật</Link></div>
        </div>
        <div className={styles.item}>
          <h4>Về chúng tôi</h4>
          <div><Link to="#">Giới thiệu</Link></div>
          <div><Link to="#">Điều khoản sử dụng</Link></div>
          <div><Link to="#">Trợ giúp</Link></div>
        </div>
        <div className={styles.item}>
          <h4>Thông tin liên hệ</h4>
        <div>
          <FontAwesomeIcon icon={faBuilding} />
          <span>
            Tòa FPT, số 10 Phạm Văn Bạch, Phường Dịch Vọng, Quận Cầu Giấy, Hà
            Nội, Việt Nam
          </span>
        </div>
        <div>
           <FontAwesomeIcon icon={faPhoneVolume} />
          <span>
            1900.633.331 hoặc 077.567.6116 8h30-21h thứ 2 - thứ 6, 8h30-11h30
            thứ 7
          </span>
        </div>
        <div>
          <a href="#">support@codelearn.io</a>
        </div>
        </div>
      </div>
      <div className={styles.reserved}>
          <a href="#">Bản quyền thuộc QuocDat@</a>
      </div>
    </footer>
  );
}
export default Footer;
