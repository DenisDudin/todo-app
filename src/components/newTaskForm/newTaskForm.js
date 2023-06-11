import { useState } from 'react';
// import PropTypes from 'prop-types';

function NewTaskForm(props) {
  const [task, setTask] = useState({
    inputValue: '',
    minute: '',
    second: '',
  });

  const onValueChange = (e) => {
    setTask((valueTask) => ({
      ...valueTask,
      [e.target.name]: e.target.value,
    }));
  };

  const onEditFieldKeyDown = (e) => {
    const { addNewTask } = props;

    if (e.key === 'Enter') {
      addNewTask(task);
      setTask({ inputValue: '', minute: '', second: '' });
    }
  };

  return (
    <form className='new-todo-form'>
      <input
        name='inputValue'
        className='new-todo'
        placeholder='Task'
        value={task.inputValue}
        onChange={onValueChange}
        onKeyDown={onEditFieldKeyDown}
      />
      <input
        name='minute'
        className='new-todo-form__timer'
        placeholder='Min'
        value={task.minute}
        onChange={onValueChange}
        onKeyDown={onEditFieldKeyDown}
      />
      <input
        name='second'
        className='new-todo-form__timer'
        placeholder='Sec'
        value={task.second}
        onChange={onValueChange}
        onKeyDown={onEditFieldKeyDown}
      />
    </form>
  );
}

NewTaskForm.defaultProps = {
  props: () => {},
};

export default NewTaskForm;
