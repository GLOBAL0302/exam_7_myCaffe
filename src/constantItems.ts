import hamburgerImg from "./assets/MenuItemImg/hamburgerItem.png";
import friesImg from "./assets/MenuItemImg/friesItem.png";
import coffeeImg from "./assets/MenuItemImg/coffeeIcon.png";
import teaImg from "./assets/MenuItemImg/TeaIcon.png";
import colaImg from "./assets/MenuItemImg/colaIcon.png"
import {menuItemConst} from './types.ts';


export const hamburger:menuItemConst = {
  name:"Hamburger",
  price: 80,
  img:hamburgerImg
}

export const cheeseBurger:menuItemConst={
  name: "CheeseBurger",
  price: 90,
  img:hamburgerImg
}

export const fries:menuItemConst = {
  name:"Fries",
  price: 45,
  img:friesImg
}

export const coffee:menuItemConst={
  name: "Coffee",
  price: 70,
  img:coffeeImg
}

export const tea:menuItemConst = {
  name:"Tea",
  price: 50,
  img:teaImg
}

export const cola:menuItemConst = {
  name:"Coca-Cola",
  price: 40,
  img:colaImg
}