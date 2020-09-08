import React, { Component } from 'react';
import Item from './Item'

const ListItem = () => {
    const elements = new Array(20).fill(null)
    const urls = ['https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
,'https://i.pinimg.com/564x/b1/15/ab/b115abe638f99d9d22631bfe4bee4bbd.jpg']
    console.log(elements);
    // const array_height = [{h:100,top:}]
    //  const array_height = [100,200,400,300,500,500,300,400,200,100]
    // const margin_top = [0,0,0,0,0,350,250,50,150,-50]
    return (
        <div className="list_item">
            {
                elements.map((index,e) =>(
                    <Item  index={e} url={urls[Math.floor(Math.random() * 2)]} />
                ))
            }
        </div>
    )
}


export default ListItem;