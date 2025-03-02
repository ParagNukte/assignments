import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import Container from "./component/Container";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/login"
          element={
            <Container>
              <Login />
            </Container>
          }
        />

        <Route
          path="/signup"
          element={
            <Container>
              <Signup />
            </Container>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Container>
              <Dashboard />
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
