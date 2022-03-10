import React from "react";
import { ThemeConsumer  } from "../contexts/theme";
import Popular from './components/Popular'
import Battle from './components/Battle'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Nav () {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
              <Router>
                <nav className="row space-between flex-center">
                    <ul>
                        <li>
                            <Link to="/" className={`btn-clear nav-link btn-hover ${this.state.theme}`}>Battle</Link>
                        </li>
                        <li>
                            <Link to="/popular" className={`btn-clear nav-link btn-hover ${this.state.theme}`}>Popukar</Link>
                        </li>
                    </ul>
                    <button
                        className="btn-clear nav-link"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? 'Dark Theme' : <div style={{color: "#DADADA"}}>Light Theme</div>}
                    </button>
                    <Routes>
                    <Route exact path="/" element={<div className='container'><Battle /></div>} />
                    <Route exact path="/popular" element={<div className='container'><Popular /></div>}/>
                    </Routes>
                </nav>
              </Router>
            )}
        </ThemeConsumer>
    )
}

export default Nav;
