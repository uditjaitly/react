import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import AddExpense from '../components/AddExpense'
import Dashboard from '../components/Dashboard'
import EditExpense from '../components/EditExpense'
import Help from '../components/Help'
import NotFound from '../components/NotFound'
import Header from '../components/Header'


const AppRouter=()=> (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" exact={true} component={Dashboard}></Route>
            <Route path="/add" exact={true} component={AddExpense}></Route>
            <Route path="/edit/:id" exact={true} component={EditExpense}></Route>
            <Route path="/help" exact={true} component={Help}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </div>
    
    </BrowserRouter>
);
export default AppRouter


