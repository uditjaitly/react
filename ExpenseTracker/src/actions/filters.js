export const setFilterText=(text="")=>{
    return{
        type:"FILTER_TEXT_UPDATE",
        text
    }
}

export const setSortByDate=()=>{
    return{
        type:"SORT_BY_DATE"
    }
}

export const setSortByAmount=()=>{
    return{
        type:"SORT_BY_AMOUNT"
    }
}

export const setStartDate=(startDate=undefined)=>{
    return{
        type:"SET_START_DATE",
        startDate
    }
}
export const setEndDate=(endDate=undefined)=>{
    return{
        type:"SET_END_DATE",
        endDate
    }
}
