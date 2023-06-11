import Task from '../task';
import PropTypes from 'prop-types';

function TaskList(props) {
  const { tasks, deleteTask, completedTask, editTask, onPlayTimer, onPauseTimer } = props;

  const taskList = tasks.map((task) => {
    const { id } = task;
    return (
      <Task
        key={id}
        task={task}
        deleteTask={() => deleteTask(id)}
        completedTask={(e) => completedTask(id, e.currentTarget.getAttribute('data-completed'))}
        editTask={editTask}
        onPlayTimer={() => onPlayTimer(id)}
        onPauseTimer={() => onPauseTimer(id)}
      />
    );
  });

  return <ul className='todo-list'>{taskList}</ul>;
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
