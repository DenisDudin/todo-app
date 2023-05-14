import TasksFilter from "../tasksFilter";

const Footer = ({ filters, onFilterSelect, deleteCompletedTask }) => {
  const btns = filters.map((filter) => {
    return (
      <TasksFilter
        key={filter.name}
        text={filter.label}
        onFilterSelect={() => onFilterSelect(filter.name)}
      />
    );
  });

  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">{btns}</ul>
      <button className="clear-completed" onClick={deleteCompletedTask}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
