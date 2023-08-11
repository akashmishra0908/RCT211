import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Component/Counter";
import { Todo } from "./Component/Todo";

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
