import React from 'react'
import PropTypes from 'prop-types'

function Profile({name="Name Here",age="Age Here",pro="Profession Here", alrt}) {
    const styleObject = {textAlign:"center",fontSize: "30px", background:"orange", color:"black",padding : "100px" ,paddingLeft:"100px" }
    return (
        <div style = {styleObject}>
             <img className="pic" src="houssem.jpg" thumbnail style={{ width:"20%",height:"20%"}} />
            <p>
                Heey ! My Name is {name} a {age} years old, and i'm a {pro} 
                
            </p>
            {alrt(name)}
            <div>
           
            </div>
        </div>
    )
}
Profile.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    pro:PropTypes.string
}
export default Profile;