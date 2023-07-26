import Header from '../components/header'
import '../css/ChangePW.css'
import { useNavigate } from 'react-router-dom';

export default function Sent() {
    const navigate = useNavigate();
    function handleClick (){
          navigate("/login")
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
            <h1>Thanks!</h1>
            <h2>Your password reset pin has been sent</h2>
            <h3> to your provided email or phone number.</h3>
            <input type="number" id="pin" className="box" placeholder="Type the 6 digit pin here..." />
            <input type="password" id="new-password" className="type-here" placeholder="New Password..." />
            <input type="password" id="new-password" className="type-here" placeholder="Re-enter your new password..." />
            <input type="submit" onClick={handleClick} value="Change Password" id="change-password" />
    </form>
    </div>
    </>
    )
}