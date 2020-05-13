import React from "react";
import { Route } from 'react-router';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed';


import "./App.css";


function App() {
    return (
        <div>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/app/newsfeed" component={NewsFeed} />
        </div>
    );
}

export default App;
