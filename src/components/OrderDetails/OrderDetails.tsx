import {menuItemState} from '../../types.ts';
import React from 'react';
import OrderDetail from './OrderDetail/OrderDetail.tsx';

interface Props{
  menuItems: menuItemState[]
  reduceMenuItem:(value:menuItemState)=>void
}

const OrderDetails:React.FC<Props> = ({menuItems, reduceMenuItem}) => {
  const totalPrice:number = menuItems.reduce((acc, item)=>{
    return item.count * item.title.price + acc
  }, 0)
  return (
    <div className="orderDetails w-50 border-5 border p-4">
      {menuItems.filter(item => item.count > 0)
        .map(item => (<OrderDetail key={Math.random()} menuItem ={item} reduceMenuItem={()=>reduceMenuItem(item)}/>))}
      <p><strong>{totalPrice > 0 ? `Total price: ${totalPrice}`: "You have not made Orders"}</strong></p>
    </div>
  );
};

export default OrderDetails;