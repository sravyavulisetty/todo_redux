import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-2xl font-bold'>My Todo List</h1>
        <AddTodoForm/>
        <TodoList/>
        <TotalCompleteItems/>
      </header>
    </div>
  );
}

export default App;
