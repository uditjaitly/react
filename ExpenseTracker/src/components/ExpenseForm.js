import React from 'react'
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses'
import moment from "moment"
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
const now=moment();
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
    }

    state={
        description:"",
        amount:0,
        note:"",
        date:moment(),
        calFocused:false,
        error:""
    }

    handleDescription=(e)=>{
        const description=e.target.value;
        this.setState(()=>{
            return {description}
        })
    }

    handleAmount=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
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

    onFocusChange=({focused})=>{
        this.setState(()=>{
            return {calFocused:focused}
        })
    }
    
    handleDate=(date)=>{
      if(date)
        this.setState(()=>{
            return {date}
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={((e)=>{
                        

                    e.preventDefault();
                    if(!this.state.amount || !this.state.description){
                        this.setState(()=>{
                            return {error:"Amount or description empty"}
                        })
                        console.log("Error- Mention Amount and Description")
                    }
                    else{
                        this.setState(()=>{
                            return {error:""}
                        })
                        this.props.onSubmit({
                            description:this.state.description,
                            amount:parseFloat(this.state.amount,10)*100,
                            createdAt:this.state.date.valueOf(),
                            note:this.state.note

                        })
                       
                    }
                
                })}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" value={this.state.description} placeholder="Description" onChange={this.handleDescription} autoFocus />
                    <input type="number" value={this.state.amount} placeholder="Amount" onChange={this.handleAmount} />
                    <textarea placeholder="Add note for your expense" onChange={this.handleNote}/>
                    <SingleDatePicker
                        date={this.state.date} // momentPropTypes.momentObj or null
                        onDateChange={this.handleDate} // PropTypes.func.isRequired
                        focused={this.state.calFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        isOutsideRange={()=>{return false}}
                        numberOfMonths={1}
                    />
                    <button>Add Expense</button>
                
                
                </form>
            </div>
        )   
    }
}
