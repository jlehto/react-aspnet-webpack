import React from "react"
import ReactDOM from "react-dom"
import FullPage from "./Components/common/FullPage"
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <FullPage/>
    </Router>,    
    document.getElementById("app")

)