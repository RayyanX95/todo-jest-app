import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

import './todo-list.css';
import TestMaterialUI from '../Test_/test-material-ui';
import ToDo from './todo/todo';

const ToDoList = ({ todoList }) => {
  return (
    <Row data-test="component-todo-list" className="List m-0 pt-2">
      <Row className="m-0" >
        <h3>Your Tasks</h3>
      </Row>
      {todoList.length && <Row data-test='todo-list_' className="w-100 m-0">
        {todoList?.map(todo => (
          <ToDo todo={todo} />
        ))}
      </Row>}
      {!todoList?.length && <Col md={12}
        data-test='empty-message'
        className='p-3 text-center'  >
        <p>There is no tasks</p>
      </Col>}
    </Row>
  )
}

export default ToDoList
