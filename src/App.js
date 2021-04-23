import React, { Component } from 'react'
import nextId from "react-id-generator";

import './App.sass';
import AddForm from './components/add-form/add-form.jsx';
import ToDoList from './components/todo-list/todo-list.jsx';

class App extends Component {
  htmlId = nextId("todo-id-");

  state = {
    todoList: [],
  }
  addTodoHandler = () => {
    const todoList = [...this.state.todoList];
    const todo = {
      value: (Math.random() * 10).toFixed(0),
      id: this.htmlId
    };
    todoList.push(todo);
    this.setState({ todoList });
  }

  render() {
    return (
      <div data-test='component-app' className="App">
        <AddForm addHandler={this.addTodoHandler} />
        <ToDoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
