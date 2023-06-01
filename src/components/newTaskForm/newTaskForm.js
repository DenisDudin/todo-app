import { Component } from 'react';
// import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onEditFieldKeyDown = (e) => {
    const { inputValue } = this.state;
    const { addNewTask } = this.props;

    if (e.key === 'Enter') {
      addNewTask(inputValue);
      this.state.inputValue = '';
    }
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form className='new-todo-form'>
        <input
          className='new-todo'
          placeholder='Task'
          value={inputValue}
          onChange={this.onValueChange}
          onKeyDown={this.onEditFieldKeyDown}
        />
        <input className='new-todo-form__timer' placeholder='Min' />
        <input className='new-todo-form__timer' placeholder='Sec' />
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
