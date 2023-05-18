import PropTypes from 'prop-types';

function TasksFilter({ id, text, onFilterSelect }) {
  return (
    <li>
      <button type='button' id={id} onClick={onFilterSelect}>
        {text}
      </button>
    </li>
  );
}

TasksFilter.defaultProps = {
  id: '',
  text: '',
  onFilterSelect: () => {},
};

TasksFilter.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  onFilterSelect: PropTypes.func,
};

export default TasksFilter;
