import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function () {
  const despatch = useDispatch();
  const counts = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>
        <button
          aria-label="Increment Value"
          onClick={() => despatch(increment())}
        >
          Increment
        </button>
        <span>{counts}</span>
        <button
          aria-label="Decrement Value"
          onClick={() => despatch(decrement())}
        >
          Decreament
        </button>
      </div>
    </div>
  );
}
