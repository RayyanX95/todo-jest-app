import React, { Component } from 'react'
import uuid from 'react-uuid';

import './App.sass';
import AddForm from './components/add-form/add-form.jsx';
import ToDoList from './components/todo-list/todo-list.jsx';

class App extends Component {
  state = {
    todoList: [],
  }
  addTodoHandler = () => {
    const todoList = [...this.state.todoList];
    const todo = {
      value: (Math.random() * 10).toFixed(0),
      id: uuid()
    };
    todoList.push(todo);
    this.setState({ todoList });
  }
  removeTodoHandler = (id) => {
    const todoList = this.state.todoList.filter(todo => todo.id != id);
    this.setState({ todoList });
  }

  render() {
    return (
      <div data-test='component-app' className="App">
        <AddForm addHandler={this.addTodoHandler}  />
        <ToDoList todoList={this.state.todoList} removeTodoHandler={this.removeTodoHandler}/>
      </div>
    );
  }
}

export default App;
