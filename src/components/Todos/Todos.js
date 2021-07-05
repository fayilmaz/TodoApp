import { useSelector, useDispatch } from "react-redux";
import { TYPES } from "../../redux/TYPES";
import { getTodos } from "../../redux/store";

const Todos = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(getTodos);
  const handleComplete = (id) => {
    dispatch({ type: TYPES.HANDLE_COMPLETE, payload: { id } });
  };
  const handleRemove = (id) => {
    dispatch({ type: TYPES.REMOVE, payload: { id } });
  };

  return (
    <div>
      <ul>
        {todoList.length > 0 ? (
          todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <p className={todo.completed ? "completed" : ""}>
                  {todo.title}
                </p>
                <input
                  type="checkbox"
                  onChange={() => handleComplete(todo.id)}
                />
                <button onClick={() => handleRemove(todo.id)}>Remove</button>
              </li>
            );
          })
        ) : (
          <p>There are no todos to show</p>
        )}
      </ul>
    </div>
  );
};

export default Todos;
