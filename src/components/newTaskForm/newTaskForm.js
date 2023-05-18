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
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={inputValue}
        onChange={this.onValueChange}
        onKeyDown={this.onEditFieldKeyDown}
      />
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
