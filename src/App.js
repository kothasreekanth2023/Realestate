import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Properties from './pages/Properties';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/properties" element={<Properties />}></Route>
      </Routes>

    </Router>
   </>
  );
}

export default App;
