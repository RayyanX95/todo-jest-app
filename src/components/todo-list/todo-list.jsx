import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import './todo-list.css';
import TestMaterialUI from '../Test_/test-material-ui';
import ToDo from './todo/todo';

const ToDoList = ({ todoList, removeTodoHandler }) => {
    return (
    <Row data-test="component-todo-list" className="List m-0 pt-2">
      <Row className="m-0" >
        <h3 data-test='list-title'>Your Tasks</h3>
      </Row>
      {!!todoList.length && <Row key={Math.random()} className="w-100 m-0">
        {todoList?.map((todo, i) => (
          <ToDo
            data-test='todo-item'
            key={todo.id}
            todo={todo}
            removeTodoHandler={removeTodoHandler} />
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

ToDoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ToDoList
