import {createStore} from 'redux'


const store=createStore((state={count:0},action)=>{
    switch(action){
        case "INCREMENT":return{count:state.count+1}
        case "DECREMENT":return{count:state.count-1}
        default: return state
    }
    return state
});

const sub=store.subscribe(()=>{
    console.log("Store changed")
});

store.dispatch("INCREMENT");
store.dispatch("DECREMENT");
store.dispatch("DECREMENT");

console.log("practice is running")