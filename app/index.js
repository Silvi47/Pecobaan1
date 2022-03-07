import React from 'react'
import ReactDOM from 'react-dom'
import Popular from './components/Popular'
import './index.css'
import Battle from './components/Battle'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
            <div>
              <ul className="flex-center">
                <li>
                  <Link to="/" className='nav-link btn-hover'>Battle</Link>
                </li>
                <li>
                  <Link to="/popular" className='nav-link btn-hover'>Popular</Link>
                </li>
              </ul>
                <Routes>
                    <Route exact path="/" element={<div className='container'><Battle /></div>} />
                    <Route path="/popular" element={<div className='container'><Popular /></div>}/>
                </Routes>
            </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
