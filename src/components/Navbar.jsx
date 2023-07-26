import '../css/Navbar.css'

export default function Navbar() {
    return <div className="title">
<span className="ACE">ACE</span>
<span className="Classroom"> Classroom</span>
<span className="Board"> Board</span>
<div className="links">
                <a href="/home">Home</a>
                <a href="/assignments">Assignments</a>
                <a href="/people">People</a>
                <a href="/classroom">Classroom</a>
                <a href="/login">Sign Out</a>
                </div>
    </div>
}