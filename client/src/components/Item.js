import React, { Component, useEffect, useState } from 'react';
// import { useEffect } from 'react'

const Item = (props) => {
  
    
    return (
        <div className="item"
            style={{
                // width:'250px',
                // // height:`${props.height}`,
                // height:'300px',
                borderRadius:'10px',
                backgroundColor:'#d0d0d0',
                // marginTop:'20px',
                backgroundImage:`url(${props.url})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition: 'center',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 5px 16px 0px',
                cursor:'zoom-in',
                 animation: 'ripple 3s',
                //  opacity:'0',
                animationFillMode: 'forwards'
              

            }}
           
        >

        </div>
    )
}

export default Item;