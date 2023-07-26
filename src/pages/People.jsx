import Navbar from '../components/navbar'
import '../css/People.css'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

export default function People() {
 return ( 
 <>
    <Navbar/>
    <div className="instructor">
        Instructor
    </div>
    <div className="instructor-name"><Avatar className="avatar">RS</Avatar><h>Ray Sanders</h>
    </div>
    
    
    <div className="classmates">
        Classmates
        <span className="students">21 Students</span>
    </div>

<div className="students-names">
<Avatar className="avatar">KC</Avatar><h1 className="top-row">Kim Chang</h1>
<Avatar className="avatar">AH</Avatar><h1 className="top-row">Alejandro Hernandez</h1>
<Avatar className="avatar">NP</Avatar><h1 className="top-row">Natalie Patterson</h1><hr></hr>


<Avatar className="avatar">TR</Avatar><h1 className="row">Tommy Ruiz</h1>
<Avatar className="avatar">IR</Avatar><h1 className="row">Ivan Reyes</h1>
<Avatar className="avatar">BN</Avatar><h1 className="row">Bethany Nishimoto</h1><hr></hr>

<Avatar className="avatar">EJ</Avatar><h1 className="row">Elise Johnson</h1>
<Avatar className="avatar">AK</Avatar><h1 className="row">Alicia Kim</h1>
<Avatar className="avatar">IC</Avatar><h1 className="row">Isabella Choi</h1><hr></hr>

<Avatar className="avatar">JG</Avatar><h1 className="row">Jeremy Griffin</h1>
<Avatar className="avatar">JM</Avatar><h1 className="row">Joseph McIntyre</h1>
<Avatar className="avatar">AS</Avatar><h1 className="row">Aditi Singh</h1><hr></hr>

<Avatar className="avatar">MJ</Avatar><h1 className="row">Michelle Jackson</h1>
<Avatar className="avatar">AF</Avatar><h1 className="row">Aaron Fisher</h1>
<Avatar className="avatar">CS</Avatar><h1 className="row">Chance Sparks</h1><hr></hr>

<Avatar className="avatar">LL</Avatar><h1 className="row">Lisa Lim</h1>
<Avatar className="avatar">JS</Avatar><h1 className="row">Jasmin Santos</h1>
<Avatar className="avatar">SP</Avatar><h1 className="row">Simon Perez</h1><hr></hr>

<Avatar className="avatar">LA</Avatar><h1 className="row">Luis Aguilar</h1>
<Avatar className="avatar">MS</Avatar><h1 className="row">Marilyn Shields</h1>
<Avatar className="avatar">EK</Avatar><h1 className="row">Elias Kowalski</h1>
</div>
 </>
 )
}