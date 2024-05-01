import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from './components/Interactive/ErrorBoundary.jsx';
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
)
