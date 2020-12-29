import React from 'react'
import moment from "moment"
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
export default class EditExpenseForm extends React.Component{

    constructor(props){
        super(props)
    }

    state={
        description:this.props.expense.description,

        amount:this.props.expense.amount,
        note:this.props.expense.note,
        date:this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calFocused: false,
        error: ""
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
                <p>This is Edit Form{console.log(this.state.description)}</p>
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
                            amount:parseFloat(this.state.amount,10),
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
                    <button>Update Expense</button>
                
                
                </form>
            </div>
        )   
    }
}
