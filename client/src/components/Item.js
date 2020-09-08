import React, { Component, useEffect, useState } from 'react';
// import { useEffect } from 'react'

const Item = (props) => {
    // const [m_top, setMargin] = useState(0)
    // useEffect(() => {
    //     console.log("setting");
    //     setMargin(props.height -30)
    // },[m_top])
    return (
        <div
            style={{
                // width:'250px',
                // // height:`${props.height}`,
                // height:'300px',
                borderRadius:'10px',
                backgroundColor:'#d0d0d0',
                // marginTop:'20px',
                backgroundImage:`url(${props.url})`,
                backgroundRepeat:'none',
                backgroundSize:'cover',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 5px 16px 0px'
                // gridColumn: '1 / 6',
                // gridRow: '6 / 9'
                //  marginTop: `${-props.top}px`
            
            }}
        >

        </div>
    )
}

export default Item;