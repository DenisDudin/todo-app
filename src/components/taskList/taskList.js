import { Component } from "react";
import Task from "../task";

class TaskList extends Component {
  render() {
    const { tasks, deleteTask, completedTask, editTask } = this.props;

    const taskList = tasks.map((task) => {
      const { id } = task;
      return (
        <Task
          key={id}
          task={task}
          deleteTask={() => deleteTask(id)}
          completedTask={(e) =>
            completedTask(id, e.currentTarget.getAttribute("data-completed"))
          }
          editTask={editTask}
        />
      );
    });

    return <ul className="todo-list">{taskList}</ul>;
  }
}

export default TaskList;
