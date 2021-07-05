import { TodoConstant } from "../../store/constants/todo.constant";
import { useSelector, useDispatch } from "react-redux";
import AddButton from "../AddButton/AddButton";

const InputForm = () => {
  const formValue = useSelector((state) => state.formValue);
  const dispatch = useDispatch();
  const formHandler = (e) => {
    dispatch({
      type: TodoConstant.HANDLE_FORM,
      payload: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <input type="text" onChange={formHandler} value={formValue} />
        <AddButton />
      </form>
    </div>
  );
};

export default InputForm;
