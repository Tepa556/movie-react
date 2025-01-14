import AppRoutes from "./route/route"
import { BrowserRouter as Router } from "react-router-dom"
import "./main.css"
function App() {


  return (
     <>
      <Router>
        <AppRoutes /> 
      </Router>
     </>
  )
}

export default App
