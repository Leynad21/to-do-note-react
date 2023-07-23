import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToDoProvider } from './context/toDoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>
)
