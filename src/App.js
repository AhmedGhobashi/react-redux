import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useCallback } from "react";

function App() {
  // DISPATHC VARIABLE
  const dispatch = useDispatch();

  // MY STATES FROM RODUCER-STORE
  const globalState = useSelector((state)=>state);
  // const state = useSelector((state)=> {
  //   return state.value});
  // const showtoggleState = useSelector((state)=> state.toggle);




  // DISPATCH FUNCTIONS

  const handleGlobalState = (value)=>{
    if (value < 1){
      return 0
    }
    return value;
  }

      /* I used useCallback here to avoid infinity rendering and asked it to not run this function until a new dipatch happends */
  const counterHandler = useCallback((type, payload)=>{
    dispatch({type:type, payload:payload});
  },[dispatch]);

  const showCounter = ()=>{
      dispatch ({type: "toggleCounter"});
   }

   useEffect (()=>{
    counterHandler("increase", 10)
   },[])
  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {globalState.toggle && (
        <>
      <div className="counter">Counter: {handleGlobalState(globalState.value)}</div>
      <div>
          <button className="btn" onClick={()=>counterHandler("increase", 10)}>increase +</button>
          <button className="btn" onClick={()=>counterHandler("decrease", 5)}>decrease -</button>
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
