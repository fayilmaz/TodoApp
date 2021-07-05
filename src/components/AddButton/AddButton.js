import { TYPES } from "../../redux/TYPES";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getFormValue } from "../../redux/store";

const AddButton = () => {
  const formValue = useSelector(getFormValue);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (formValue !== "") {
      dispatch({
        type: TYPES.ADD,
        payload: { title: formValue, id: uuidv4() },
      });
    }

    dispatch({
      type: TYPES.HANDLE_FORM,
      payload: "",
    });
  };

  return <button onClick={handleAdd}>Add</button>;
};

export default AddButton;
