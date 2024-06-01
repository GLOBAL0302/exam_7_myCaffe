import {menuItemState} from '../../types.ts';
import React from 'react';

interface Props{
  menuItem:menuItemState
}
const MenuItem:React.FC<Props> = ({menuItem}) => {
  return (
    <div className="d-flex align-items-center p-3 border border-5">
      <img src={menuItem.title.img} alt="menuItemImg" style={{width:"100px"}}/>
      <div>
        <p>{menuItem.title.name}</p>
        <span>Price: {menuItem.title.price}</span>
      </div>
    </div>
  );
};

export default MenuItem;