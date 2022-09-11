import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { basePath, roomPath } from './constants';
import Home from './home';
import Room from './room';

const App = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path={roomPath(":roomId")}>
                <Room />
            </Route>
            <Route exact path={basePath}>
                <Home />
            </Route>
            <Route>
                Not Found
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;