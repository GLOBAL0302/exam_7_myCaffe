import './App.css';
import {hamburger, cheeseBurger, fries, coffee, tea, cola} from './constantItems.ts';
import React from 'react';
import {menuItemState} from './types.ts';
import MenuItem from './components/menuItem/menuItem.tsx';
import menuItem from './components/menuItem/menuItem.tsx';


function App() {
  const [menuItems, setMenuItems] = React.useState<menuItemState[]>([
    {title:hamburger, count:0},
    {title:cheeseBurger, count: 0},
    {title: fries, count: 0},
    {title:coffee, count: 0},
    {title:tea, count: 0},
    {title:cola, count: 0}
  ])



  return (
    <>
      <div className="wrapper d-flex">
        <div className="orderDetails w-50 border-5 border">
          <h1>here order details</h1>
        </div>
        <div className="addItemmSection d-flex w-50 flex-wrap" >
          {menuItems.map(item=>(
            <MenuItem menuItem={item}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
