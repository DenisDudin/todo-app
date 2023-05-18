import TasksFilter from '../tasksFilter';
import PropTypes from 'prop-types';

function Footer({ activeTask, filters, onFilterSelect, deleteCompletedTask }) {
  const btns = filters.map((filter) => (
    <TasksFilter key={filter.name} text={filter.label} onFilterSelect={() => onFilterSelect(filter.name)} />
  ));

  return (
    <footer className='footer'>
      <span className='todo-count'>{activeTask} items left</span>
      <ul className='filters'>{btns}</ul>
      <button type='button' className='clear-completed' onClick={deleteCompletedTask}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  activeTask: 0,
  filters: [],
  onFilterSelect: () => {},
  deleteCompletedTask: () => {},
};
Footer.propTypes = {
  activeTask: PropTypes.number,
  filters: PropTypes.arrayOf(PropTypes.shape({})),
  onFilterSelect: PropTypes.func,
  deleteCompletedTask: PropTypes.func,
};

export default Footer;
