import Task from '../task';
import { Component } from 'react';
import PropTypes from 'prop-types';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tasks, deleteTask, completedTask, editTask } = this.props;

    const taskList = tasks.map((task) => {
      const { id } = task;
      return (
        <Task
          key={id}
          task={task}
          deleteTask={() => deleteTask(id)}
          completedTask={(e) => completedTask(id, e.currentTarget.getAttribute('data-completed'))}
          editTask={editTask}
        />
      );
    });

    return <ul className='todo-list'>{taskList}</ul>;
  }
}

TaskList.defaultProps = {
  tasks: [],
  deleteTask: () => {},
  completedTask: () => {},
  editTask: () => {},
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})),
  deleteTask: PropTypes.func,
  completedTask: PropTypes.func,
  editTask: PropTypes.func,
};

export default TaskList;
