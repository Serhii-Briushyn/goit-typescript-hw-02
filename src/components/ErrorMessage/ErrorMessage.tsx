import styles from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <h2 className={styles.error}>Something went wrong! Please try again.</h2>
  );
}

export default ErrorMessage;
