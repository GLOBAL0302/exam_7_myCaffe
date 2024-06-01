import {menuItemState} from '../../../types.ts';
import React from 'react';
import "./OrderDetail.css";

interface Props{
  menuItem: menuItemState
  reduceMenuItem: React.MouseEventHandler
}
const OrderDetail:React.FC<Props> = ({menuItem, reduceMenuItem}) => {
  return (
    <div className='d-flex justify-content-between align-items-center mb-3'>
        <p className="mb-0 w-25">{menuItem.title.name}</p>
        <p className="mb-0">X {menuItem.count}</p>
        <p className="mb-0">{menuItem.count * menuItem.title.price} KGS</p>
      <img src="https://www.svgrepo.com/show/79440/delete-button.svg" alt="" style={{width:"30px"}} onClick={reduceMenuItem}/>
    </div>
  );
};

export default OrderDetail;