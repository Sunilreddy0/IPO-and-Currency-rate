import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MyRoute from "./components/MyRoute";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MyRoute />}>
          <Route path="/ipo-list" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
