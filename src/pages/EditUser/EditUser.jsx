import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./EditUser.module.css"; // Import modular CSS

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("User not found");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      alert("User updated successfully!");
      navigate("/users");
    } catch {
      setError("Failed to update user. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.editContainer}>
      <form onSubmit={handleSubmit} className={styles.editForm}>
        <h2>Edit User</h2>
        {error && <p className={styles.error}>{error}</p>}

        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          className={styles.inputField}
          required
        />

        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          className={styles.inputField}
          required
        />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className={styles.inputField}
          required
        />

        <button type="submit" className={styles.saveButton}>Save Changes</button>
        <button type="button" className={styles.cancelButton} onClick={() => navigate("/users")}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUser;
