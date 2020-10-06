import React, {useState, useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss'
import Navigator from './components/Navigator'
import SearchBar from './components/SearchBar'
import MenuBar from './components/MenuBar'
import ListItem from './components/ListItem'
// import dot from '../public/dot.svg'

function App() {
  const ref = useRef(null)
  const [scrolled, setScroll] = useState(false)
  const scrollToRef = (ref) => window.scrollTo( {top:2300}) 
  useEffect(() => {
    // window.onscroll = () => {
    //   console.log(window.pageYOffset);
    //   if(window.pageYOffset > 300 && !scrolled) {
    //     console.log('Ting tong...')
    //     setScroll(!scrolled)
    //     scrollToRef(ref)
    //   }

    // }
  },[])
  // useEffect
  return (
    <React.Fragment >

     
      <div className="header"
        style={{
          position: '-webkit-sticky',
          position: 'sticky',
          top: '0',
          backgroundColor:'white',
          zIndex:'100',
          // paddingTop:'20px',
          height:'80px',
          paddingTop:'auto'
          
          // justifyContent:'center',
          // alignItems:'center'
        }}
      >
          <div className='menu_bar'>
            <MenuBar />
          </div>
          <div className="search_bar">
            <SearchBar />
          </div>
          <div className="navigator pull-right">
            <Navigator />
          </div>
      </div>
      <div className='container' >
         <ListItem />
      </div>
      <div style={{
        position:'fixed',
        bottom:'0',
        width:'100%',
        height:'150px',
        backgroundImage:' linear-gradient(to bottom, transparent, white)',
        opacity:'1'
      }}>

      </div>
     </React.Fragment>
      // <Hint/>
  );
}

export default App;
