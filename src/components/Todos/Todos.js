import { useSelector, useDispatch } from "react-redux";
import { TodoConstant } from "../../store/constants/todo.constant";
import {userSelector, getTodos} from "../../store/selectors/todo.selector";

const Todos = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(getTodos);
  const user = useSelector(userSelector);
  const handleComplete = (id) => {
    dispatch({ type: TodoConstant.HANDLE_COMPLETE, payload: { id } });
  };
  const handleRemove = (id) => {
    dispatch({ type: TodoConstant.REMOVE, payload: { id } });
  };

  return (
    <>
      <div>{user.name}</div>
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
    </>
  );
};

export default Todos;
