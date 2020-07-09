import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  let attachedclasses = ["SideDrawer","Close"]
  if(props.open){
    attachedclasses = ["SideDrawer","Open"]
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedclasses.join(' ')}>
          <div className="Logosmall">
            <Logo/>
          </div>
              
          <nav>
            <NavigationItems />
          </nav>
      </div>
    </Aux>
  );
}
export default sideDrawer;