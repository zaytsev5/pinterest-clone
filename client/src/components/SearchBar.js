import React, { useState, useEffect } from 'react';
import Hint from './Hint'
const SearchBar = () => {
    const [down, setDown] = useState(false)
    
    const Modal = () => {
        return (
            <div
                style={{
                    position:'fixed',
                    zIndex:'2',
                    left:'0',
                    top:'80px',
                    width:'100%',
                    height:'100%',
                    overflow:'auto',
                    backgroundColor:'rgb(0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    transition:'1s'
                }}
            >

            </div>
        )
    }

    const onMouseDown = () => {
       setDown(!down)
   }
    return (
        <div >
            <input type='text' placeholder="Tìm kiếm" className="search_input" 
                onMouseDown ={()=>onMouseDown()}
                
            />
            {
                down && <Hint />
            }
            {
                down && <Modal />
            }
        </div>
    )
}

export default SearchBar;