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
              <Link to='/' className='nav-link btn-space' onClick={toggleTheme}>
                  {theme === 'light' ? <p>Popular</p> : <p style="color: #DADADA;">Battle</p>}
              </Link>
            </li>
            <li>
              <Link to='/popular' className='nav-link btn-space' onClick={toggleTheme}>
                  {theme === 'light' ? <p>Popular</p> : <p style="color: #DADADA;">Popular</p>}
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
