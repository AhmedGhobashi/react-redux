import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useCallback } from "react";
import {increase, decrease} from './store/counterSlice';
import { logIn, logOut } from "./store/authSlice";


function App() {
 
  const dispatch = useDispatch();
  const globalState = useSelector((state)=>state);

  const isLogged = ()=>{
    return globalState.auth.isLoggedIn
  }

  const loginHandler = (state)=>{
    console.log(state);
    if (state){
      dispatch (logOut());
    }else{
      dispatch(logIn());
    }
  }

  const counterHandler =  useCallback((type, amount)=>{
    if(type === "increase"){
      dispatch (increase(amount));
    }else{
      dispatch (decrease(amount));
    }
  },[dispatch])

  useEffect(()=>{
    counterHandler("increase", 5);
  },[counterHandler])

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
     
       {isLogged()&&(
        <>
      <div className="counter">Counter: {globalState.counter.value}</div>
      <div>
          <button className="btn" onClick={()=> counterHandler("increase",5)}>increase +</button>
          <button className="btn" onClick={()=>counterHandler("decrease",5)}>decrease -</button>
      </div>

        </>
       )}

      
      <div>
        <button className="btn" onClick={()=>loginHandler(isLogged())}>{ isLogged() ? 'logOut': "logIn"}</button>
      </div>

    </div>
  );
}

export default App;









/* 
//################### the old working code before refactoring ##################


import "./App.css";
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state)=> {
    return state.value});
    
  const showtoggleState = useSelector((state)=> state.toggle);

  const increase = ()=>{
    const action = {type: "increase", payload: {number:5}};
    dispatch(action);
  }

    const decrease = () => {
      const action = { type: "decrease"};
      dispatch(action);
    };

    const showCounter = ()=>{
      dispatch ({type: "toggleCounter"});
    }


  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {showtoggleState && (
        <>

<div className="counter">Counter: {state}</div>
<div>
  <button className="btn" onClick={increase}>increase +</button>
  <button className="btn" onClick={decrease}>decrease -</button>
</div>
        </>
      )}
      
      <div>
        <button className="btn" onClick={showCounter}>Hide/Show Counter Number</button>
      </div>

    </div>
  );
}

export default App;




*/
