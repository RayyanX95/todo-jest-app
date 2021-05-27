import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

const AddForm = ({ addHandler }) => {
  // const [todo, setTodo]
  const [todo, setTodo] = React.useState('')
  return (
    <Form data-test='component-form' >
      <Row form>
        <Col md={12} >
          <h3 data-test="title-form" >Add your tasks</h3>
        </Col>
        <Col md={8}>
          <FormGroup>
            <input
              data-test='input-form'
              type="text" name="text"
              placeholder="new todo..."
              value={todo}
              onChange={e => setTodo(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <button
            data-test='button-form'
            color="primary"
            onClick={() => addHandler(todo)}>Add New</button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddForm;