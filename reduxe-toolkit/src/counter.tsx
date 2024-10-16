import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/Store/store";
import { addOne, MinesOne, setName } from "./Redux/Reduce/createSlice";

export const Counter = () => {
  const name = useSelector((state: RootState) => state.Count.name);
  const value = useSelector((state: RootState) => state.Count.value);
  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      <p>{name}</p>
      <p>{value}</p>
      <button onClick={() => dispatch(addOne())}>incres</button>
      <button onClick={() => dispatch(MinesOne())}>mines</button>
      <button onClick={() => dispatch(setName())}>change name </button>
    </div>
  );
};
