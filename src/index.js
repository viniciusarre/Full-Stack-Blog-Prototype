import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import {Provider} from 'react-redux';
import Posts from "./Components/Posts";
import Add from "./Components/Add";
import {createStore} from 'redux';
import operations from "./Reducers/operations";

export let store = createStore(operations);
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
