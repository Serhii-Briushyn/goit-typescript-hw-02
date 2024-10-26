import { PulseLoader } from "react-spinners";
import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.wrapper}>
      <PulseLoader color="#f3f3f3" />
    </div>
  );
}

export default Loader;
