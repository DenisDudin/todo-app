import { Component } from 'react';
// import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      minute: '',
      second: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onEditFieldKeyDown = (e) => {
    const { addNewTask } = this.props;

    if (e.key === 'Enter') {
      addNewTask(this.state);
      this.state.inputValue = '';
      this.state.minute = '';
      this.state.second = '';
    }
  };

  render() {
    const { inputValue, minute, second } = this.state;
    return (
      <form className='new-todo-form'>
        <input
          name='inputValue'
          className='new-todo'
          placeholder='Task'
          value={inputValue}
          onChange={this.onValueChange}
          onKeyDown={this.onEditFieldKeyDown}
        />
        <input
          name='minute'
          className='new-todo-form__timer'
          placeholder='Min'
          value={minute}
          onChange={this.onValueChange}
          onKeyDown={this.onEditFieldKeyDown}
        />
        <input
          name='second'
          className='new-todo-form__timer'
          placeholder='Sec'
          value={second}
          onChange={this.onValueChange}
          onKeyDown={this.onEditFieldKeyDown}
        />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  props: () => {},
};

// NewTaskForm.propTypes = {
//   props: PropTypes.func,
// };

export default NewTaskForm;
