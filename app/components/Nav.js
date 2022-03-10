import React from "react";
import { ThemeConsumer  } from "../contexts/theme";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between flex-center'>
          <ul className='row nav'>
            <li>
              <Link to='/' className={`nav-link btn-space ${this.state.theme}`}>
                  Popular
              </Link>
            </li>
            <li>
              <Link to='/battle' className={`nav-link btn-space ${this.state.theme}`}>
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
