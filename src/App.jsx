import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserList from "./pages/UserList/UserList";
import EditUser from "./pages/EditUser/EditUser";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
        <Route path="/edit/:id" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
