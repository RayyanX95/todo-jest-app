import React from 'react';
import { Col, Row, Form, FormGroup, } from 'reactstrap';
import { useSelector } from 'react-redux';

const AddForm = ({ addHandler }) => {
  // const [todo, setTodo]
  const [todo, setTodo] = React.useState('');
  const isEnabled = useSelector(state => state);
  // console.log("state: ", isEnabled);
  // debugger;
  return (
    <form data-test='component-form' >
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
            onClick={() => addHandler(todo)}
            disabled={!isEnabled} >
            Add New</button>
        </Col>
      </Row>
    </form>
  );
}

export default AddForm;