import store from "../../redux/store";
import { TYPES } from "../../redux/TYPES";

const InputForm = () => {
  const formHandler = (e) => {
    store.dispatch({
      type: TYPES.HANDLE_FORM,
      payload: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <input type="text" onChange={formHandler} />
      </form>
    </div>
  );
};

export default InputForm;
