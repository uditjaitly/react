import {createStore} from 'redux'

console.log('101')

const incrementCount=(incrementBy=1)=>{
    return{
        type:"INCREMENT",
        incrementBy
        
    };
}

const decrementCount=(decrementBy=1)=>{
    return{
        type:"DECREMENT",
        decrementBy
    }
}

const setCount=(value=0)=>{
    return{
        type:"SET",
        value
    }
}

const resetCount=()=>{
    return{
        type:"RESET"
    }
}

const store=createStore((state = {count:0},action)=>{
    
    switch(action.type){

        case "INCREMENT":return {count: state.count + action.incrementBy}
        case "DECREMENT": return {count: state.count - action.decrementBy}
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

store.dispatch(incrementCount(5))

store.dispatch(decrementCount(10))

store.dispatch(setCount(100))

store.dispatch(resetCount())


unsub();





console.log(store.getState());