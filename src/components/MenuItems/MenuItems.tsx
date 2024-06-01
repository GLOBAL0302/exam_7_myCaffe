import MenuItem from './menuItem/menuItem.tsx';
import React from 'react';
import {menuItemState} from '../../types.ts';

interface Props{
  menuItems:menuItemState[]
  addMenuItem: (value:menuItemState)=> void
}

const MenuItems:React.FC<Props> = ({menuItems,addMenuItem }) => {
  return (
    <div className='addItemmSection d-flex w-50 flex-wrap'>
      {menuItems.map(item=>(
        <MenuItem
          key={Math.random().toString()}
          menuItem={item}
          addMenuItem={()=>addMenuItem(item)}
        />
      ))}
    </div>
  );
};

export default MenuItems;