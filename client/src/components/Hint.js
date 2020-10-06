import React, { Component } from 'react';


const Hint = () =>{
    return (
    <div>
        <div
        style={{
            width:'65%',
            position:'absolute',
            backgroundColor:'white',
            borderRadius:'10px',
            height:'400px',
            marginLeft:'50%',
            transform:'translate(-75%,0%)',
            top:'70px',
            opacity:'1',
            zIndex:'1000'
        }}>
        </div>
          {/* <div className='cover_screen'>
          </div> */}
    </div>
    )
}

export default Hint;