import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigtionItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className="Toolbar">
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      <div className="Logoside">
         <Logo />
      </div>
      
      <nav className="DesktopOnly">
         <NavigtionItems/>
      </nav>
  </header>
);

export default toolbar;