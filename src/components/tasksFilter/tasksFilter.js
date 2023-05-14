const TasksFilter = ({ id, text, onFilterSelect }) => {
  return (
    <li>
      <button id={id} onClick={onFilterSelect}>
        {text}
      </button>
    </li>
  );
};

export default TasksFilter;
