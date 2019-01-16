import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import routes from './routes';
import ReactDOM from "react-dom";

class Index extends Component {
    render() {
        const store = createStore(reducer, applyMiddleware(thunk));
        return (
            <Provider store={store}>
                    <div className="App">
                        <div className="container">
                            <Router>
                                {routes}
                            </Router>
                        </div>
                    </div>
            </Provider>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
