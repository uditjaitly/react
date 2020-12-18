import {createStore} from 'redux'

console.log('101')

const store=createStore((state = {count:0},action)=>{
    const incrementBy= typeof action.incrementBy === 'number' ? action.incrementBy : 1
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
    switch(action.type){

        case "INCREMENT":return {count: state.count +incrementBy}
        case "DECREMENT": return {count: state.count - decrementBy}
        case "SET": return { count:action.value}
        case "RESET": return {count:0}
        default: return state;

    }
    console.log("running")
    
    
    return state;
});
const unsub=store.subscribe(()=>{
    console.log("Store Changed")
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy : 10
    
})

store.dispatch({
    type:'INCREMENT',
    incrementBy : 5
});

store.dispatch({
    type: 'SET',
    value: 100
})

unsub();





console.log(store.getState());