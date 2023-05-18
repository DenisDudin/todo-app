import NewTaskForm from '../newTaskForm';
import TaskList from '../taskList';
import Footer from '../footer';
import { Component } from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.taskId = 1;
    this.state = {
      taskList: [
        {
          id: `t${this.taskId++}`,
          completed: false,
          text: 'First',
          created: new Date(2023, 4, 15, 3),
        },
        {
          id: `t${this.taskId++}`,
          completed: false,
          text: 'Second',
          created: new Date(2023, 4, 15, 2),
        },
        {
          id: `t${this.taskId++}`,
          completed: false,
          text: 'Third',
          created: new Date(2023, 4, 15, 1),
        },
      ],

      filters: [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'completed', label: 'Completed' },
      ],

      filter: 'all',
    };
  }

  deleteTask = (id) => {
    this.setState(({ taskList }) => ({
      taskList: taskList.filter((item) => item.id !== id),
    }));
  };

  deleteCompletedTask = () => {
    this.setState(({ taskList }) => ({
      taskList: taskList.filter((item) => !item.completed),
    }));
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

  editTask = (id, prop) => {
    this.setState(({ taskList }) => ({
      taskList: taskList.map((item) => {
        if (item.id === id) {
          return { ...item, text: prop, editing: true };
        }
        return item;
      }),
    }));
  };

  filteredTasks = (filter) => {
    const { taskList } = this.state;
    switch (filter) {
      case 'all':
        return taskList;
      case 'active':
        return taskList.filter((task) => task.completed === false);
      case 'completed':
        return taskList.filter((task) => task.completed === true);
      default:
        return taskList;
    }
  };

  addNewTask = (task) => {
    const newTask = {
      id: `t${this.taskId++}`,
      completed: false,
      text: task,
      created: new Date(),
    };
    this.setState(({ taskList }) => ({
      taskList: [...taskList, newTask],
    }));
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { filter, taskList, filters } = this.state;
    const visibleTask = this.filteredTasks(filter);

    /* eslint no-param-reassign: 0 */
    const activeTask = taskList.reduce((count, task) => (task.completed === false ? (count += 1) : count), 0);
    /* eslint no-param-reassign: 0 */

    return (
      <div className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <NewTaskForm addNewTask={this.addNewTask} />
        </header>
        <section className='main'>
          <TaskList
            tasks={visibleTask}
            deleteTask={this.deleteTask}
            completedTask={this.completedTask}
            editTask={this.editTask}
          />
          <Footer
            activeTask={activeTask}
            filters={filters}
            onFilterSelect={this.onFilterSelect}
            deleteCompletedTask={this.deleteCompletedTask}
          />
        </section>
      </div>
    );
  }
}

export default ToDo;
