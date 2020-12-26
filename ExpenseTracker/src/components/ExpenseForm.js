import React from 'react'
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses'
class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
    }

    state={
        description:"",
        amount:0,
        note:""
    }

    handleDescription=(e)=>{
        const description=e.target.value;
        this.setState(()=>{
            return {description}
        })
    }

    handleAmount=(e)=>{
        const amount=e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {amount}
            })
        }
    }
    
    handleNote=(e)=>{
        const note=e.target.value
        this.setState(()=>{
            return {note}
        })
    }
    
    
    render(){
        return(
            <div>
                <form>
                    <input type="text" value={this.state.description} placeholder="Description" onChange={this.handleDescription} autoFocus />
                    <input type="number" value={this.state.amount} placeholder="Amount" onChange={this.handleAmount} />
                    <textarea placeholder="Add note for your expense" onChange={this.handleNote}/>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        this.props.dispatch(addExpense({description:this.state.description,amount:this.state.amount,note:this.state.note}))
                    }}>Add Expense</button>
                
                
                </form>
            </div>
        )   
    }
}

const mapToExpenseForm=(state)=>{
    return{
        expenses:state.expenses
    }
}

export default connect(mapToExpenseForm)(ExpenseForm);