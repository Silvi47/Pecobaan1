import React from "react";
import { ThemeConsumer  } from "../contexts/theme";
import { NavLink } from "react-router-dom";
import '../index.css'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

function Nav () {
    return (
        <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between flex-center'>
          <ul className='row nav'>
            <li>
              <NavLink to='/' exact activeClassName={activeStyle} className='nav-link'>
                  Popular
              </NavLink>
            </li>
            <li>
              <NavLink to='/battle' activeClassName={activeStyle} className='nav-link'>
                  Battle
              </NavLink>
            </li>
          </ul>
          <button
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
    )
}

export default Nav;
