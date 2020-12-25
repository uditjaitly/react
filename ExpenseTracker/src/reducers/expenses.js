const defaultStateForExpenses=[]


export default (state=defaultStateForExpenses,action)=>{
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