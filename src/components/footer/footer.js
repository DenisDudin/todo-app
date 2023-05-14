import { Component } from "react";
import TasksFilter from "../tasksFilter";

const Footer = ({ filters, onFilterSelect }) => {
  const btns = filters.map((filter) => {
    // const activeBtn = props.filter === name;
    // const clazz = activeBtn ? "btn-light" : "btn-outline-light";
    return (
      <TasksFilter
        key={filter.name}
        text={filter.label}
        onFilterSelect={() => onFilterSelect(filter.name)}
      />
      // <button type="button"
      //     className={`btn ${clazz}`}
      //     key={name}
      //     onClick={() => props.onFilterSelect(name)}>
      //     {label}
      // </button>
    );
  });

  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">{btns}</ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
