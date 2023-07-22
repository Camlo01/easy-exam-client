import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import VisualizeData from './pages/visualizeData'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/easy-exam-client",
    element: <App />
  }
  ,
  {
    path: "/easy-exam-client/data",
    element: <VisualizeData />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
