import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardPage from "./dashboard"
import LoginPage from "./auth/login"
import MainLayout from "./mainLayout"
import HomePage from "./home"
import SignupPage from "./auth/signup"
import { createContext, useState } from "react"

export interface AuthContextType {
  user: any;
  setUser: any;
}
export const authContext = createContext<AuthContextType | undefined>(undefined);
function App() {
  
  const [user, setUser] = useState(null)
  return (
    <authContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  )
}

export default App
