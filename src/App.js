import AuthProvider from "./AuthProvider";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Products from "./Products"
import About from "./About"
import './Login.css';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />

          </Route>
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
