import "./App.css";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, Home, Account } from "./pages";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account/:subpage?" element={<Account />} />
            <Route path="/account/:subpage/:action" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
