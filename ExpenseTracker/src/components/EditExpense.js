import React from 'react'
import {connect} from 'react-redux'
import EditExpenseForm from './EditExpenseForm.js'
import {updateExpense} from '../actions/expenses'
import {removeExpense} from '../actions/expenses'
const EditExpense=(props)=>{
    console.log(props)
    return(
    <div>
        Editing the expense of id of {props.match.params.id}
        <EditExpenseForm onSubmit={(expense)=>{
            props.dispatch(updateExpense(props.expense.id,expense.amount,expense.description,expense.note,expense.createdAt))
            props.history.push('/')
        }} expense={props.expense}/>
        <button onClick={()=>{
            props.dispatch(removeExpense(props.expense.id))
            props.history.push('/')
        }}>Remove</button>
    </div>
    )
};

const mapToEditExpense=(state,props)=>{
    return{
    expense:state.expenses.find((expense)=>{
        if(expense.id==props.match.params.id){
            return expense
        }
    })
}
}

export default connect(mapToEditExpense)(EditExpense)