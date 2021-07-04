import InputForm from "./components/InputForm/InputForm";
import AddButton from "./components/AddButton/AddButton";
import Todos from "./components/Todos/Todos";

const App = () => {
  return (
    <div className="App">
      <InputForm />
      <AddButton />
      <Todos />
    </div>
  );
};

export default App;
