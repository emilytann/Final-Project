import Header from '../components/header'
import '../css/ForgotPW.css'
import { useNavigate } from 'react-router-dom';

export default function Reset() {
  const navigate = useNavigate();
  function handleClick (){
        navigate("/login")
    }
  function handleClickk (){
        navigate("/changepw")
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
            <h1>Trouble Logging In?</h1>
            <h2>Enter your full name with either your email or phone</h2>
            <h3>number and we'll send you a link to get back into</h3>
            <h4>your account.</h4>
            <input type="fullname" id="fullname" className="box" placeholder="Full Name..." />
            <input type="email-password" id="email-password" className="box" placeholder="Email or Phone Number..." />
            <input type="submit" onClick={handleClickk} value="Reset Password" id="reset-password" />
            <a href="#" onClick={handleClick}>Back to Login</a>
    </form>
    </div>
  </>
  )
} 