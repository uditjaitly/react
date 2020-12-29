import React from 'react'
import {connect} from 'react-redux'
import {setFilterText, setSortByAmount, setSortByDate, setStartDate , setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

class ExpenseListFilters extends React.Component{



    constructor(props){
        super(props)
    }


   

    state={
        calFocused:null
       
    }

    dateHandler=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    handleFocus=(calFocused)=>{
        this.setState(()=>{
            return {calFocused}
        })
    }
    render(){
        return(
            <div>
            <input value={this.props.filterText} type="text" onChange={(e)=>{
                    this.props.dispatch(setFilterText(e.target.value))
                
            }}/>
            <select value={this.props.filter.sortBy} onChange={(e)=>{
                if(e.target.value=="date"){
                    this.props.dispatch(setSortByDate())
                }
                else if(e.target.value=="amount"){
                    this.props.dispatch(setSortByAmount())
                }
            }}>
                <option value="date" >Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                    startDate={this.props.filter.startDate}
                    endDate={this.props.endDate} 
                    onDatesChange={this.dateHandler}
                    focusedInput={this.state.calFocused}  
                    onFocusChange={this.handleFocus}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={()=>false}
                    
                    />
        </div>
        )
    }
}


const mapToExpenseListFilters=(state)=>{
    return{
        filter:state.filter
    }
}

export default connect(mapToExpenseListFilters)(ExpenseListFilters);

