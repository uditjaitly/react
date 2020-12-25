export default (expenses,{text,sortBy,startDate,endDate})=>{
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