import {menuItemState} from '../../types.ts';
import React from 'react';

interface Props{
  menuItem:menuItemState
  addMenuItem:React.MouseEventHandler
}
const MenuItem:React.FC<Props> = ({menuItem, addMenuItem}) => {
  return (
    <button className="d-flex align-items-center p-3 border border-5 w-50" onClick={addMenuItem}>
      <img src={menuItem.title.img} alt="menuItemImg" style={{width:"100px"}}/>
      <div>
        <p>{menuItem.title.name}</p>
        <span>Price: {menuItem.title.price}</span>
      </div>
    </button>
  );
};

export default MenuItem;