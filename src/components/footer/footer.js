import TasksFilter from "../tasksFilter";
import PropTypes from "prop-types";

const Footer = ({
  activeTask,
  filters,
  onFilterSelect,
  deleteCompletedTask,
}) => {
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
      <span className="todo-count">{activeTask} items left</span>
      <ul className="filters">{btns}</ul>
      <button className="clear-completed" onClick={deleteCompletedTask}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  activeTask: 0,
  onFilterSelect: () => {},
  deleteCompletedTask: () => {},
};
Footer.propTypes = {
  activeTask: PropTypes.number,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFilterSelect: PropTypes.func,
  deleteCompletedTask: PropTypes.func,
};

export default Footer;
