import {createStore,combineReducers} from "redux"
const uuid = require('uuid').v4


const defaultStateForFilters={
    sortBy: undefined,
    key: "",
    startDate: undefined,
    endDate: undefined
}


const addExpense=({description="Empty",note="Empty Note",amount=0,createdAt=0})=>{
    return{
        type:"ADD_EXPENSE",
        expenses:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt

        }
    }
}

const removeExpense=(id)=>{
    return{
        type:"REMOVE_EXPENSE",
        id
    }

}

const updateExpense=(id,amount)=>{
    return{
        type:"UPDATE_EXPENSE",
        id,
        amount
    }
}


const updateKey=(key)=>{
    return{
        type:"UPDATE_KEY",
        key
    }
}







const expenseReducer=(state=[],action)=>{
    switch(action.type){
        case "ADD_EXPENSE":{
            return [...state,action.expenses]
        }
        case "REMOVE_EXPENSE":{
            return state.filter((expense)=>{
                return expense.id!=action.id
            })
        }
        case "UPDATE_EXPENSE":{
            return state.map((expense)=>{
                if(expense.id==action.id){
                    return{
                        ...expense,
                        amount:action.amount
                    }
                }
            })
            
               
            
        }
        default : return state
    }
}

const filterReducer=(state=defaultStateForFilters,action)=>{
    switch(action.type){
        case "UPDATE_KEY":{
            return {
                ...state,
                key:action.key
            }
        }
        
        default : return state
    }
}




const store=createStore(combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    })
)   
store.subscribe(()=>{
    console.log(store.getState())
})
const exp1=store.dispatch(addExpense({description:"Rent",note:"Paid by 3",amount:300}))
const exp2=store.dispatch(addExpense({description:"Coffee",note:"Paid by 5",amount:500}))

store.dispatch(removeExpense(exp1.expenses.id))
store.dispatch(updateExpense(exp2.expenses.id,300))

store.dispatch(updateKey("rent"))