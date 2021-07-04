import { useSelector } from "react-redux";

const Todos = () => {
  const todoList = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todoList.map((todo, i) => {
          return (
            <li key={i}>
              <p>{todo.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
