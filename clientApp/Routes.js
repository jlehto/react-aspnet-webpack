import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

class Routes extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/" render={() => (<h1>Home page</h1>)}>
                    </Route>
                    <Route exact path="/1" render={() => (<p>Route 1</p>)}>
                    </Route>
                    <Route exact path="/2" render={() => (<p>Route no 2</p>)}>
                    </Route>
                        <Route render={() => (<p>Not Found"</p>)}>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Routes