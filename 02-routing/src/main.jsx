import React from 'react'
import ReactDOM from 'react-dom/client'
// React-Router
import {
  Link,
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";

import ReactPage from './Components/ReactPage'
import VitePage from './Components/VitePage'
// Styles
import "./styles.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">
          React
        </Link>
        <Link to="/vite">
          Vite
        </Link> 
      </nav>
      <Routes>
        <Route exact path="/" element={<ReactPage />} />
        <Route exact path="/vite" element={<VitePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
