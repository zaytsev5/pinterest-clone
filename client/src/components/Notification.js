import React, { Component } from 'react';

const Notification = () => {
    return (
        <div
            style={{
                position:'absolute',
                width:'300px',
                height:'600px',
                backgroundColor:'white',
                marginLeft:'-150px',
                marginTop:'15px',
                borderRadius:'5px',
                opacity:'1',
                boxShadow:'0 1px 5px rgba(104, 104, 104, 0.8)',
                zIndex:'100'
            }}
        >

        </div>
    )
}
export default Notification;