import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';


const store = configureStore({reducer:{
    counter: counterReducer ,
    auth: authReducer,
}});
export default store;
































/* react redux 
// const initState = {value:0, toggle: true}
// const counterReducer =(state = initState, action)=>{
//     if(action.type === 'increase'){
//         return {...state, value: state.value + action.payload}
//     }

//     if (action.type === "decrease") {
//           return { ...state, value: state.value - 1};
//     }

//     if(action.type === "toggleCounter"){
//         return {...state, toggle: !state.toggle}
//     }
//     return state;
// }

//app init >> action(none) >> return state (initState) >> value=0
    */
