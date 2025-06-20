import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Project from "./Pages/Project";
import Login from "./auth/Login";
import Signup from "./auth/Signup";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
