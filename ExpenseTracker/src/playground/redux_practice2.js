import {combineReducers, createStore} from "redux"
//import uuid from 'uuid';
const uuid = require('uuid').v4
const addExpense=({description="Empty",note="Empty Note",amount=0,createdAt=0}={})=>{
    return{
        type:"ADD_EXPENSE",
        expenses:{
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
    
};

const removeExpense=(id)=>{
    
    return{
        type: "REMOVE_EXPENSE",
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

const setFilterText=(text="")=>{
    return{
        type:"FILTER_TEXT_UPDATE",
        text
    }
}

const setSortByDate=()=>{
    return{
        type:"SORT_BY_DATE"
    }
}

const setSortByAmount=()=>{
    return{
        type:"SORT_BY_AMOUNT"
    }
}

const setStartDate=(startDate=undefined)=>{
    return{
        type:"SET_START_DATE",
        startDate
    }
}
const setEndDate=(endDate=undefined)=>{
    return{
        type:"SET_END_DATE",
        endDate
    }
}

const toggleVisibleArray=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const matchStartDate= typeof startDate!='number' || expense.createdAt>=startDate;
        const matchEndDate= typeof endDate!='number' || expense.createdAt<=endDate
        let matchWithText=false;
        if(expense.description.includes(text) || expense.note.includes(text)){
            matchWithText=true;
        }
        return matchStartDate && matchEndDate && matchWithText
    }).sort((a,b)=>{
        if(sortBy=="date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy=="amount"){
            return a.amount<b.amount ? 1: -1;
        }
    })

   
}



const defaultStateForExpenses=[]
const defaultStateForFilter={
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
}
const expenseReducer=(state=defaultStateForExpenses,action)=>{
    switch(action.type){
        case "ADD_EXPENSE": return [...state,action.expenses]
        case "REMOVE_EXPENSE": return state.filter(({id})=>{
            return id!==action.id
        })
        case "UPDATE_EXPENSE": return state.map((expense)=>{
            if(expense.id==action.id){
                console.log(expense)
                console.log(action)
                return {
                    
                        ...expense,
                        amount:action.amount

                    


                    
                }
            }
            else{
                console.log(expense)
                return expense;
            }
        })
        default: return state;
    }
}
const filterReducer=(state=defaultStateForFilter,action)=>{
    switch(action.type){
        case "FILTER_TEXT_UPDATE": return {
            ...state,
            text: action.text
        }
        case "SORT_BY_DATE":
            
            return{
                ...state,
                sortBy: 'date'
            }
        case "SORT_BY_AMOUNT": return {
            ...state,
            sortBy: 'amount'
        }
        case "SET_START_DATE": return{
            ...state,
            startDate: action.startDate
            
        }
        case "SET_END_DATE": return{
            ...state,
            endDate: action.endDate
        }

        default: return state;
    }
}


const demoState={
    expenses:[{
        id:"Something",
        description:"Describe the item",
        note:"Note",
        amount:0,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


const store=createStore(
    combineReducers({
        expenses:expenseReducer,
        filter: filterReducer
    })
)
store.subscribe(()=>{
    const visibleArray=toggleVisibleArray(store.getState().expenses,store.getState().filter)
    console.log(visibleArray);
})
const expenseOne=store.dispatch(addExpense({description:"Rent",amount:1000,createdAt:70}));

const expenseTwo=store.dispatch(addExpense({description:"Coffee",amount:300,createdAt:150}))
//console.log(expenseOne)
//store.dispatch(removeExpense(expenseOne.expenses.id));
store.dispatch(updateExpense(expenseTwo.expenses.id,500))
store.dispatch(setFilterText(""))
store.dispatch(setSortByDate())
//store.dispatch(setSortByAmount())
store.dispatch(setStartDate(50))
store.dispatch(setEndDate())
console.log(store.getState());