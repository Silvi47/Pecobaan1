import React from "react";
import { ThemeConsumer  } from "../contexts/theme";

function Nav () {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className="row space-between">
                    <button
                        className="btn-clear nav-link"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? 'Dark Theme' : <div style={{color: "#DADADA"}}>Light Theme</div>}
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}

export default Nav;
