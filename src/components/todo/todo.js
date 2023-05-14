import { Component } from "react";
import NewTaskForm from "../newTaskForm";
import TaskList from "../taskList";
import Footer from "../footer";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.taskId = 1;
    this.state = {
      taskList: [
        {
          id: `t${this.taskId++}`,
          completed: false,
          text: "First",
          created: new Date(2023, 5, 13, 12),
          editing: false,
        },
        {
          id: `t${this.taskId++}`,
          completed: false,
          text: "Second",
          created: new Date(2023, 5, 13, 13),
          editing: false,
        },
        {
          id: `t${this.taskId++}`,
          completed: false,
          text: "Third",
          created: new Date(2023, 5, 13, 14),
          editing: false,
        },
      ],

      filters: [
        { name: "all", label: "All" },
        { name: "active", label: "Active" },
        { name: "completed", label: "Completed" },
      ],

      filter: "all",
    };
  }

  deleteTask = (id) => {
    this.setState(({ taskList }) => {
      return {
        taskList: taskList.filter((item) => item.id !== id),
      };
    });
  };

  completedTask = (id, prop) => {
    this.setState(({ taskList }) => ({
      taskList: taskList.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  filteredTasks = (filter) => {
    switch (filter) {
      case "all":
        return this.state.taskList;
      case "active":
        return this.state.taskList.filter((task) => task.completed === false);
      case "completed":
        return this.state.taskList.filter((task) => task.completed === true);
      default:
        return this.state.taskList;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;
    const visibleTask = this.filteredTasks(filter);

    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section class="main">
          <TaskList
            tasks={visibleTask}
            deleteTask={this.deleteTask}
            completedTask={this.completedTask}
          />
          <Footer
            filters={this.state.filters}
            onFilterSelect={this.onFilterSelect}
          />
        </section>
      </div>
    );
  }
}

export default ToDo;
