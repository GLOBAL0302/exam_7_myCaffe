import './App.css';
import {hamburger, cheeseBurger, fries, coffee, tea, cola} from './constantItems.ts';
import React from 'react';
import {menuItemState} from './types.ts';


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

    </>
  )
}

export default App
