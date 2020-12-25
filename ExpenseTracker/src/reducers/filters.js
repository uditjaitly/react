const defaultStateForFilter={
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export default(state=defaultStateForFilter,action)=>{
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
