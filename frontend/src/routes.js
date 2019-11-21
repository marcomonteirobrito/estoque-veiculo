import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Create from './pages/Create';
import List from './pages/List';
import Delete from './pages/Delete';
import Update from './pages/Update';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/create" component={Create} />
                <Route path="/delete" component={Delete} />
                <Route path="/update" component={Update} />
                <Route path="/list" component={List} />
            </Switch>
        </BrowserRouter>
    );
}
