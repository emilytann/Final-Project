import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ForgotPW from './pages/ForgotPW'
import ChangePW from './pages/ChangePW'
import People from './pages/People'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotpw" element={<ForgotPW/>} />
          <Route path="/changepw" element={<ChangePW/>} />
          <Route path="/people" element={<People/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}