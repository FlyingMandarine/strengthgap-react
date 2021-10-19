import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppSg from './AppSg.js'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/strengthgap'>
                    <AppSg />
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)