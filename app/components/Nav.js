import React from "react";
import { ThemeConsumer  } from "../contexts/theme";
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
                <nav className="row space-between flex-center">
                    <ul>
                        <li>
                            <Link to="/" className={`btn-clear nav-link ${this.state.theme}`}>Battle</Link>
                        </li>
                        <li>
                            <Link to="/popular" className={`btn-clear nav-link ${this.state.theme}`}>Popukar</Link>
                        </li>
                    </ul>
                    <button
                        className="btn-clear nav-link"
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
