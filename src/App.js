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
