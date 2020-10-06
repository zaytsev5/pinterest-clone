import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faCoffee, faBell,faCommentDots, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import Notification from './Notification'


const Navigator = () => {
    const [noti ,setNoti] = useState(false)
    const [user, setUser] = useState({})
    const [cash, setCash] = useState(false)
    const getUser = () => {
        console.log("in getUser()");
        fetch("http://localhost:3000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        })
          .then(response => {
            console.log("got this far..");
            return response.json()
            // if (response.status === 200) return response.json();
            // throw new Error("failed to authenticate user");
          })
          .then(responseJson => {
            setUser(responseJson.user)
          })
          .catch(error => {
              console.log(error);
                console.log("got this far 2");
          });
          
      }
    useEffect(() => {
        getUser()
    },[])

    return (
        <div className="navigator">
            <FontAwesomeIcon
                icon={faBell}   
                className="icon" 
                onClick={()=>setNoti(!noti)}
                style={{
                    cursor:'pointer'
                }}
            />
           {
               noti && <Notification />
           } 
            <FontAwesomeIcon
                icon={faCommentDots}    
                className="icon" 

            />
            {
                user ? <img
                className="user_img icon"
                onClick={() => {
                    window.location = 'http://localhost:3000/logout'
                }} 
                src='https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3068209813405648&height=50&width=50&ext=1601299396&hash=AeS_R_iqj0zbPw8J'>
                </img> : <FontAwesomeIcon
                icon={faSignInAlt}
                style={{
                    cursor:'pointer'
                }}
                onClick={() => {
                    window.location = 'http://localhost:3000/auth/facebook'
                }}    
                className="icon" />
            }
            {/* <button
                style={{
                    backgroundColor: cash ? 'green' : 'white'
                }}
                onClick={() => setCash(true)}
            >change
            </button>

            <button
                onClick={() => setCash(false)}
                style={{
                    backgroundColor: !cash ? 'green' : 'white'
                }}
            >change2</button> */}
        </div>
    )
}

export default Navigator;