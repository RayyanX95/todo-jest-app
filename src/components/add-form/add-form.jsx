import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

const AddForm = ({ addHandler }) => {
  return (
    <Form data-test='component-form' >
      <Row form>
        <Col md={12} >
          <h3 data-test="title-form" >Add your tasks</h3>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Input data-test='input-form' type="text" name="text" placeholder="new todo..." />
          </FormGroup>
        </Col>
        <Col md={3}>
          <Button
            data-test='button-form'
            color="primary"
            onClick={addHandler}>Add New</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddForm;