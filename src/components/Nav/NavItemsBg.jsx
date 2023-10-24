import { TERipple } from "tw-elements-react";
import './styles/navItemsBg.css';

function NavItemsBg() {
  return (
  <>
  <TERipple rippleColor="light" rippleRadius={25} className='teripplebg'>
  <div className="navItemsBg rounded-full">
  </div>
  </TERipple>
  </>
  )
}

export default NavItemsBg;