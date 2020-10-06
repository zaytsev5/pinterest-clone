import React, { useState, useEffect , useRef} from 'react';
import Item from './Item'

const ListItem = () => {
    console.log("render");

    const loop = useRef(null)
    const [index, setIndex] = useState(0)
    const elements = new Array(30).fill(null)
    const urls = ['https://i.pinimg.com/564x/97/fa/95/97fa95361233553fc2408b86b6caf088.jpg','https://i.pinimg.com/564x/31/52/be/3152be1dff04e935295ecb80b5163b86.jpg',
    'https://i.pinimg.com/564x/b1/15/ab/b115abe638f99d9d22631bfe4bee4bbd.jpg','https://i.pinimg.com/originals/a5/0d/41/a50d41d5937fca532604e6aa70eed720.jpg','https://i.pinimg.com/564x/13/62/06/136206ffc7df7994e21f230f0aae5ed3.jpg','https://i.pinimg.com/564x/b6/f4/c4/b6f4c4821c0f0f93ad3a87c26235fae1.jpg']
    const topics = ['weeknight dinner idea', 'home decor idea', 'green thumb idea', 'new look outfit']
    const style = [{color:'#f29705',animation:'fadein 1.5s',animationFillMode:'forwards'},{color:'#eb4034',animation:'fadein 1.5s',animationFillMode:'forwards'},
    {color:'#54823b',animation:'fadein 1.5s',animationFillMode:'forwards'},{color:'#0075d3',animation:'fadein 1.5s',animationFillMode:'forwards'}]

    // const style_item =

    const handleClickDot = (e) => {
        e.preventDefault();
        // console.log(e.target.id);
        setIndex(e.target.id)
    }

    useEffect(() =>{
		if(loop.current) clearInterval(loop.current) 
		loop.current = setInterval(() =>{
			setIndex(index => (index + 1) % 4)
		},3000)
    },[])
    
    const Topic = (props) => {
        console.log('topic');
        return (
            <p className="content_topic" style={props.style}>{props.topic}</p>
        )
    }
	

    return (
        <div>
            <div className="content">
                <p className="content_title">Get your next(NguyenVanHia)</p>
                <Topic style={style[index]} topic={topics[index]} />
                <p className="round_dots">
                    <span className="dot" id="0" style={{ backgroundColor: index == 0 ? '#f29705' : 'grey' }} onClick={handleClickDot}></span>
                    <span className="dot" id="1" style={{ backgroundColor: index == 1 ? '#eb4034' : 'grey' }} onClick={handleClickDot}></span>
                    <span className="dot" id="2" style={{ backgroundColor: index == 2 ? '#54823b' : 'grey' }} onClick={handleClickDot}></span>
                    <span className="dot" id="3" style={{ backgroundColor: index == 3 ? '#0075d3' : 'grey' }} onClick={handleClickDot}></span>

                </p>
            </div>

            <div className="list_item"
            >
                {
                    elements.map((index, e) => (
                        <Item key={e} index={e} url={urls[Math.floor(Math.random() * 6)]}  />
                    ))
                }
            </div>
        </div>
    )
}


export default ListItem;