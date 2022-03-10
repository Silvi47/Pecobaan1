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
              <NavLink to='/' exact activeStyle={activeStyle} className='nav-link'>
                  Popular
              </Link>
            </li>
            <li>
              <NavLink to='/battle' activeStyle={activeStyle} className='nav-link'>
                  Battle
              </Link>
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
