import { actions } from './actions/slice'; 
import { useAppDispatch, useAppSelector } from './reducers/hooks';
import './App.css'; 

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className='App'>
      <div className='container'>
        <p className='text'>Count: {count}</p>
        <div className='btn-wrap'>
          <button className='btn' onClick={() => dispatch(actions.increment())}>Increment</button>
          <button className='btn' onClick={() => dispatch(actions.decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  );
}