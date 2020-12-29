import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export const ExpenseListItem=({dispatch, history, id,description,amount,createdAt})=>{
    return(
        <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
            </Link>
            <p>{amount}-{createdAt}</p>
            
            
        </div>
    )
}

