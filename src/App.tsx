import './App.css';
import {hamburger, cheeseBurger, fries, coffee, tea, cola} from './constantItems.ts';
import React from 'react';
import {menuItemState} from './types.ts';
import OrderDetails from './components/OrderDetails/OrderDetails.tsx';
import MenuItems from './components/MenuItems/MenuItems.tsx';


function App() {
  const [menuItems, setMenuItems] = React.useState<menuItemState[]>([
    {title:hamburger, count:0},
    {title:cheeseBurger, count: 0},
    {title: fries, count: 0},
    {title:coffee, count: 0},
    {title:tea, count: 0},
    {title:cola, count: 0}
  ])


  const addMenuItem=(value:menuItemState)=>{
    setMenuItems((prevState)=>{
      return prevState.map((item)=>{
        if(item.title.name === value.title.name){
          return {
            ...item,
            count:item.count + 1
          }
        }
        return item
      })
    })
  }

  const reduceMenuItem = (value:menuItemState)=>{
    setMenuItems((prevState)=>{
      return prevState.map(item=>{
        if(item.title.name === value.title.name){
          return{
            ...item,
            count: item.count > 0 ? item.count - 1: 0
          }
        }
        return  item
      })
    })
  }

  return (
    <>
      <div className="wrapper d-flex">
        <OrderDetails
          menuItems={menuItems}
          reduceMenuItem={reduceMenuItem}/>
        <MenuItems
          menuItems={menuItems}
          addMenuItem={addMenuItem}/>
        {/*<div className="addItemmSection d-flex w-50 flex-wrap">*/}
        {/*  {menuItems.map(item=>(*/}
        {/*    <MenuItem*/}
        {/*      key={Math.random().toString()}*/}
        {/*      menuItem={item}*/}
        {/*      addMenuItem={()=>addMenuItem(item)}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </>
  )
}

export default App
