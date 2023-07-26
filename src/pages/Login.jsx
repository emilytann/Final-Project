import Header from '../components/header'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
   const navigate = useNavigate();
function handleClick (){
      navigate("/forgotpw")
  }
  return (
    <>
    <div className="header">
          <span className="ACE">ACE</span>
          <span className="Classroom"> Classroom</span>
          <span className="Board"> Board</span>
    </div>
    <div className="container">
        <form action="" className="form">
            <h1>Welcome back!</h1>
            <input type="email" id="email" className="box" placeholder="Email..." />
            <input type="password" id="password" className="box" placeholder="Password..." />
            <input type="submit" value="SIGN IN" id="submit" />
            <a href="#" onClick={handleClick}>Forgot Password?</a>
            <a><span>Don't have an account?</span><a href="#"> Sign Up</a></a>
    </form>
    </div>
  </>
  )
}