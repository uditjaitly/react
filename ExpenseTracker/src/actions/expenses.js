const uuid = require('uuid').v4
export const addExpense=({description="Empty",note="Empty Note",amount=0,createdAt=0}={})=>{
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

export const removeExpense=(id)=>{
    
    return{
        type: "REMOVE_EXPENSE",
        id
    }
    
}

export const updateExpense=(id,amount)=>{
    
    return{
        type:"UPDATE_EXPENSE",
        id,
        amount

    }
}