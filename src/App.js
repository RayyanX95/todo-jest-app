import './App.sass';
import AddForm from './components/add-form/add-form.jsx';
import ToDoList from './components/todo-list/todo-list.jsx';

function App() {
  return (
    <div data-test='component-app' className="App">
     <AddForm />
     <ToDoList />
    </div>
  );
}

export default App;
