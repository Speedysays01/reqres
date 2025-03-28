import { Navigate } from "react-router-dom";
import styles from "./ProtectedRoute.module.css"; // Import modular CSS

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? (
    <div className={styles.protectedContainer}>{children}</div>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
