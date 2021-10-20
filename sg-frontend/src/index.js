import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppSg from './AppSg.js'
import './strengthgap.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppSg />
        </Router>
    </Provider>,
    document.getElementById('root')
)