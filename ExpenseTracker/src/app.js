import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './styles/styles.scss'
import './styles/base/_base.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, updateExpense} from './actions/expenses'
import {setFilterText} from './actions/filters'
import './firebase/firebase'
import './playground/promises'
const store=configureStore



store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(addExpense({description:"Rent",amount:1000,createdAt:70,note:"TEST"}));
store.dispatch(addExpense({description:"Coffee",amount:500,createdAt:80}));
store.dispatch(addExpense({description:"Gas Bill",amount:1500,createdAt:60}));

store.dispatch(setFilterText(""))
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById("app"))

console.log("JS is running!!")

