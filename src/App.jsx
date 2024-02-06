import "./App.css";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
