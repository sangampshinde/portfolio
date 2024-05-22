import React from 'react'
import Navtab from './Nav/Navtab';
import { data } from './data';

function App() {

    const getTabs = ()=>{
        const tabs = ['All'];
        data.map ((item)=>{
            if(!tabs.includes(item.group)){
                tabs.push(item.group)
            }
        })
        return tabs;
    }





  return (
    <div>
      <h1>hello</h1>
      <Navtab
      tabs={getTabs()}
      onChange={()=>{}}

      ></Navtab>
    </div>
  )
}
export default App;