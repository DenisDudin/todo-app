import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.task.text,
      editing: false,
    };
  }

  onEditFieldKeyDown = (e) => {
    const { text: newText } = this.state;
    const { task, editTask } = this.props;

    switch (e.key) {
      case 'Escape':
        this.setState({
          text: task.text,
          editing: false,
        });
        break;
      case 'Enter':
        editTask(task.id, newText);
        this.setState({
          editing: false,
        });
        break;
      default:
        break;
    }
  };

  onEdit = () => {
    this.setState({
      editing: true,
    });
  };

  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  /* eslint-disable class-methods-use-this */
  setDate = (date) => formatDistanceToNow(date, { addSuffix: true, includeSeconds: true });
  /* eslint-enable class-methods-use-this */

  render() {
    const { id, task, deleteTask, completedTask } = this.props;
    const { text, editing } = this.state;
    /* eslint no-nested-ternary:off */
    const classTask = editing ? 'editing' : task.completed ? 'completed' : '';
    /* eslint no-nested-ternary:off */

    return (
      <li id={id} className={classTask}>
        <div className='view'>
          <input className='toggle' type='checkbox' data-completed='completed' onChange={completedTask} />
          <label>
            <span className='description'>{text}</span>
            <span className='created'>created {this.setDate(task.created)} ago</span>
          </label>
          <button type='button' className='icon icon-edit' onClick={this.onEdit} />
          <button type='button' className='icon icon-destroy' onClick={deleteTask} />
        </div>
        {editing ? (
          <input
            type='text'
            className='edit'
            value={text}
            onChange={this.onValueChange}
            defaultValue={this.text}
            onKeyDown={this.onEditFieldKeyDown}
          />
        ) : null}
      </li>
    );
  }
}

Task.defaultProps = {
  task: {},
  deleteTask: () => {},
  completedTask: () => {},
  editTask: () => {},
};

Task.propTypes = {
  task: PropTypes.shape({}),
  deleteTask: PropTypes.func,
  completedTask: PropTypes.func,
  editTask: PropTypes.func,
};

export default Task;
