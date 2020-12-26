import React from 'react'
import { connect } from 'react-redux'
import {removeExpense} from '../actions/expenses'
const ExpenseListItem=(props)=>{
    return(
        <div>
            <h3>{props.expense.description}</h3>
            <p>{props.expense.amount}-{props.expense.note}</p>
            <button onClick={()=>{
                props.dispatch(removeExpense(props.expense.id))
            }}>Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem);