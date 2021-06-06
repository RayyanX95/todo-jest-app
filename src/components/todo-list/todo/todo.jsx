import React from 'react'
import { Row, Label } from 'reactstrap'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: grey[600],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Todo = ({ todo, removeTodoHandler }) => {
  const [state, setState] = React.useState({ checkedG: false });
  const [labelText, setLabelText] = React.useState('');

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  let labelData = <label data-test='label-text' >{labelText}</label>
  return (
    <Row
      data-test='component-todo'
      className='m-0'
      onClick={(e) => {
        setLabelText(e.value || "clicked!");
      }} >
      <Row
        data-test='element-todo'
        className='align-items-center'
        style={{ maxHeight: 30 }}>
        <FormControlLabel
          className=' mr-0'
          control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
          label=''
        />
        <Label>{`Element ${todo?.value}`}</Label>
        {labelData}
      </Row>
    </Row>
  )
}

export default Todo
