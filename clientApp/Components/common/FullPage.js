import React, {Component} from 'react'
import Routes from '../../Routes'
import {BrowserRouter as Router} from 'react-router-dom'

class FullPage extends Component {
    render () {
        return (
            <div>
                <h2>Page top</h2>
                <Router>
                    <Routes/>    
                </Router>
            </div>
        )
    }
}

FullPage.defaultProps = {}
export default FullPage