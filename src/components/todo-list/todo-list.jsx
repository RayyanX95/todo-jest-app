import React, { Component } from 'react'
import { Row } from 'reactstrap';

import './todo-list.css';
import TestMaterialUI from '../Test_/test-material-ui'

class ToDoList extends Component {
  render() {
    return (
      <Row data-test="component-todo-list" className="List m-0 pt-2">
        <h3>Your Tasks</h3>
        <TestMaterialUI />
      </Row>
    )
  }
}

export default ToDoList
