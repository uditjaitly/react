import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './styles/styles.scss'
import './styles/base/_base.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, updateExpense} from './actions/expenses'

const store=configureStore



store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(addExpense({description:"Rent",amount:1000,createdAt:70}));


ReactDOM.render(<AppRouter/>,document.getElementById("app"))

console.log("JS is running!!")

