import { TodoConstant } from "../../store/constants/todo.constant";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getFormValue } from "../../store/selectors/todo.selector";
import {todoActions} from "../../store/actions/todo.action";

const AddButton = () => {
  const formValue = useSelector(getFormValue);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (formValue !== "") {
      // eslint-disable-next-line no-undef
      dispatch(todoActions.TodoAddAction({ title: formValue, id: uuidv4() }));
    }

    dispatch({
      type: TodoConstant.HANDLE_FORM,
      payload: "",
    });
  };

  return <button onClick={handleAdd}>Add</button>;
};

export default AddButton;
