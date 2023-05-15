import PropTypes from "prop-types";

const TasksFilter = ({ id, text, onFilterSelect }) => {
  return (
    <li>
      <button id={id} onClick={onFilterSelect}>
        {text}
      </button>
    </li>
  );
};

TasksFilter.defaultProps = {
  key: "",
  text: "",
  onFilterSelect: () => {},
};

TasksFilter.propTypes = {
  text: PropTypes.string,
  onFilterSelect: PropTypes.func,
};

export default TasksFilter;
