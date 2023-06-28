import ReactDOM from "react-dom/client";
import { Home, Dashboard, NoPage, Layout } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./pages/signup/signup-page";
import { LoginPage } from "./pages/login/login-page";
import Navbar from "./components/Navbar";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute> } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App;
