import React,{useRef} from 'react'
import './Navtab.css'

function Navtab({tabs,onChange}) {



    const elements = useRef(new Array())
    console.log('tabs:',tabs);
  return (
    <nav className='nav__tabs'>
        {
            tabs.map((name,index)=>(
                <button
                key={index}
                ref={el=>elements.current[index]=el}
                onClick={name}
                
                ></button>
            ))
        }
     
    </nav>
  )
}

export default Navtab
