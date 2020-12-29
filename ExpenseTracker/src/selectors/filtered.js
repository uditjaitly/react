import moment from 'moment'
export default (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const createdAtMoment=moment(expense.createdAt)
        const matchStartDate= startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true
        const matchEndDate= endDate ? endDate.isSameOrAfter(createdAtMoment,'day') :true
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