import React from 'react'

import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar-navigation'>
      <div className='toolbar-toggle-button'>
        <DrawerToggleButton click={props.drawClickHandler}/>
      </div>
      <div className='toolbar-logo'><a href='/'>Logo</a></div>
      <div className='toolbar-navigation-items'>
        <ul>
          <li><a href='/'>Page One</a></li>
          <li><a href='/'>Page Two</a></li>
          <li><a href='/'>Page Three</a></li>


        </ul>

      </div>
    </nav>
  </header>

)

export default Toolbar
