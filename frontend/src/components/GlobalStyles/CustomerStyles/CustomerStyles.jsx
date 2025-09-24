import styles from "./CustomerStyles.module.css";

function CustomerStyles({ children }) {
  return <div className={styles.wrapper}>
    {children}
    </div>;
}
export default CustomerStyles;
