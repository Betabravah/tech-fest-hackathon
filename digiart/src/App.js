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
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
=======
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
>>>>>>> 2ef859b660d54aaebe86a3a359bbe00aa9316c41
  );
}

export default App;
