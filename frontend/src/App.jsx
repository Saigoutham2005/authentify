import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/signup">Signup</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;