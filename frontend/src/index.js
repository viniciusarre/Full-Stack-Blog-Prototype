import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import {Provider} from 'react-redux';
import Posts from "./Components/Posts";
import Add from "./Components/Add";
import {createStore, applyMiddleware} from 'redux';
import operations from "./Reducers/operations";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middleware = [ thunk, logger]
export const store = createStore(
    operations,
    applyMiddleware(...middleware)
);
export const render = () => ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/posts" component={Posts}/>
                <Route exact path="/posts/add" component={Add}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

render();
store.subscribe(render);
