import styles from "./Button.module.css";
import { Link } from "react-router";
function Button({ to = false, primary = false, text = false, children , registerBtn=false }) {
  let Comp = "button";
  let prop = {};
  let classes = styles.wrapper;
  if (to) {
    Comp = Link;
    prop.to = to;
  }
  if (primary) {
    classes += ` ${styles.primary}`;
  }
  if (text) {
    classes += ` ${styles.text}`;
  }
    if (registerBtn) {
    classes += ` ${styles.registerBtn}`;
  }
  return (
    <Comp className={classes} {...prop}>
      {children}
    </Comp>
  );
}
export default Button;
