import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  multiply,
} from "../redux/feature/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <br />
      <h1>Counter using Redux Toolkit</h1>
      <br />
      <h1>Count:{count}</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Count
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <br />
      <br />
      <div>
        <button onClick={() => dispatch(multiply(10))}>multi by value</button>
      </div>
    </div>
  );
};

export default Counter;
