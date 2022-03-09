import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div>
              <ul className="flex-center">
                <li>
                  <Link to="/" className={`btn-clear nav-link ${this.state.theme}`}>Battle</Link>
                </li>
                <li>
                  <Link to="/popular" className={`btn-clear nav-link ${this.state.theme}`}>Popular</Link>
                </li>
                <li>
                  <Nav />
                </li>
              </ul>
                <Routes>
                    <Route exact path="/" element={<div className='container'><Battle /></div>} />
                    <Route exact path="/popular" element={<div className='container'><Popular /></div>}/>
                </Routes>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
