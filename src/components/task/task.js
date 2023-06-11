import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

function Task({ id, task, deleteTask, completedTask, onPlayTimer, onPauseTimer, editTask }) {
  const [text, setText] = useState(task.text);
  const [editing, setEditing] = useState(false);

  const onEditFieldKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        setText(task.text);
        setEditing(false);
        break;
      case 'Enter':
        editTask(task.id, text);
        setEditing(false);
        break;
      default:
        break;
    }
  };

  /* eslint-disable class-methods-use-this */
  const setDate = (date) => formatDistanceToNow(date, { addSuffix: true, includeSeconds: true });
  /* eslint-enable class-methods-use-this */

  const { created, minute, second } = task;
  /* eslint no-nested-ternary:off */
  const classTask = editing ? 'editing' : task.completed ? 'completed' : '';
  /* eslint no-nested-ternary:off */

  return (
    <li id={id} className={classTask}>
      <div className='view'>
        <input className='toggle' type='checkbox' data-completed='completed' onChange={completedTask} />
        <label>
          <span className='title'>{text}</span>
          <span className='description'>
            <button type='button' onClick={onPlayTimer} className='icon icon-play' />
            <button type='button' onClick={onPauseTimer} className='icon icon-pause' />
            {minute}:{second}
          </span>
          <span className='description'>created {setDate(created)} ago</span>
        </label>
        <button type='button' className='icon icon-edit' onClick={() => setEditing(true)} />
        <button type='button' className='icon icon-destroy' onClick={deleteTask} />
      </div>
      {editing ? (
        <input
          type='text'
          className='edit'
          value={text}
          onChange={(e) => setText(e.target.value)}
          defaultValue={text}
          onKeyDown={onEditFieldKeyDown}
        />
      ) : null}
    </li>
  );
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
