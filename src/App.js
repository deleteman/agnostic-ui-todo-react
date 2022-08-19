import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";


import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList ></TodoList>
    </div>
  );
}

export default App;
