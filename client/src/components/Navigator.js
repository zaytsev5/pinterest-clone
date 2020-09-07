import React, { Component } from 'react';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faCoffee, faBell,faCommentDots} from '@fortawesome/free-solid-svg-icons'


const Navigator = () => {
    return (
        <div className="navigator">
            <FontAwesomeIcon
                icon={faBell}   
                className="icon" 
                
                
            />
            <FontAwesomeIcon
                icon={faCommentDots}    
                className="icon" 

            />
            <img
            className="user_img icon"
            src='https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3068209813405648&height=50&width=50&ext=1601299396&hash=AeS_R_iqj0zbPw8J'>
            </img>
        </div>
    )
}

export default Navigator;