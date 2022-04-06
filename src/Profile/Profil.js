import React from "react";
import protoType from 'prop-types';
import './Profil.css'
import { Button} from 'react-bootstrap';

const Profil = props => {
    console.log(props)
return (
    <div className="profil">
        <div className="imgProfil">
        <span>{props.children}</span>
        </div>
        
        <div className="title">
        <h1 style={{marginTop:"2%", fontFamily:"Work Sans"}}>{props.fullName}</h1>
        <p style={{fontFamily:"Work Sans"}}>{props.bio}</p>
        <p style={{fontFamily:"Work Sans"}}>{props.profession}</p>
        </div>
        <div className="btnProfil">
        <Button size="sm" onClick={props.handleName} variant="primary">Alert!</Button>
        </div>
    </div>
)
}
Profil.defaultProps={
    fullName:"Username",
    bio:"userbio",
    profession:"userprofession"
}
Profil.propTypes={
    fullName:protoType.string,
    bio:protoType.string,
    profession:protoType.string
}
export default Profil;