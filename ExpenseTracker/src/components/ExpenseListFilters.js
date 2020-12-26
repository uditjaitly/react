import React from 'react'
import {connect} from 'react-redux'
import {setFilterText, setSortByAmount, setSortByDate} from '../actions/filters'


const ExpenseListFilters=(props)=>{
    return(
        <div>
            <input value={props.filterText} type="text" onChange={(e)=>{
                    props.dispatch(setFilterText(e.target.value))
                
            }}/>
            <select value={props.filter.sortBy} onChange={(e)=>{
                if(e.target.value=="date"){
                    props.dispatch(setSortByDate())
                }
                else if(e.target.value=="amount"){
                    props.dispatch(setSortByAmount())
                }
            }}>
                <option value="date" >Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )
}

const mapToExpenseListFilters=(state)=>{
    return{
        filter:state.filter
    }
}

export default connect(mapToExpenseListFilters)(ExpenseListFilters);

