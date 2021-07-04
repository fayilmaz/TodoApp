import store from "../../redux/store";
import { TYPES } from "../../redux/TYPES";
import { useSelector } from "react-redux";

const AddButton = () => {
  const formValue = useSelector((state) => state.formValue);
  const handleAdd = () => {
    if (formValue !== "") {
      store.dispatch({ type: TYPES.ADD, payload: formValue });
    }
  };
  return <button onClick={handleAdd}>Add</button>;
};

export default AddButton;
