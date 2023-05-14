import { Component } from "react";

class TasksFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <button class="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  }
}

export default TasksFilter;
