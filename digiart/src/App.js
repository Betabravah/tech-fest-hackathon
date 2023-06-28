import { Home, Dashboard, NoPage, Layout } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./pages/signup/signup-page";
import { LoginPage } from "./pages/login/login-page";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App;
