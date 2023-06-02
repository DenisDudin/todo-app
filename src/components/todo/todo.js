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
          minute: 11,
          second: 35,
          onTimer: false,
        },
        {
          id: `t${this.taskId++}`,
          completed: false,
          text: 'Second',
          created: new Date(2023, 4, 15, 2),
          minute: 9,
          second: 0,
          onTimer: false,
        },
        {
          id: `t${this.taskId++}`,
          completed: false,
          text: 'Third',
          created: new Date(2023, 4, 15, 1),
          minute: 0,
          second: 3,
          onTimer: false,
        },
      ],

      filters: [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'completed', label: 'Completed' },
      ],

      filter: 'all',
      timer: false,
    };
  }

  componentDidMount() {
    const { timer } = this.state;
    if (!timer) {
      this.state.timer = setInterval(this.changeTime, 1000);
    }
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
        if (item.id === id && item.seconds !== 0 && item.minute !== 0) {
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
          return { ...item, text: prop.input, editing: true };
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
      text: task.inputValue,
      created: new Date(),
      minute: Number(task.minute),
      second: Number(task.second),
      onTimer: false,
    };
    this.setState(({ taskList }) => ({
      taskList: [...taskList, newTask],
    }));
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  toggleTimer = (id, сondition) => {
    this.setState(({ taskList }) => ({
      taskList: taskList.map((item) => {
        if (item.id === id) {
          return { ...item, onTimer: сondition };
        }
        return item;
      }),
    }));
  };

  onPlayTimer = (id) => {
    this.toggleTimer(id, true);
  };

  onPauseTimer = (id) => {
    this.toggleTimer(id, false);
  };

  changeTime = () => {
    this.setState(({ taskList }) => ({
      taskList: taskList.map((item) => {
        const { second: secondPrev, minute: minutePrev } = item;

        if (item.onTimer === true && item.completed === false) {
          let second = secondPrev;
          let minute = minutePrev;
          let completed = false;
          let onTimer = true;

          if (second === 0 && minute === 0) {
            completed = true;
            onTimer = false;
          }
          if (item.second > 0) {
            second -= 1;
          } else if (item.minute > 0) {
            second = 59;
            minute -= 1;
          }

          return { ...item, minute, second, completed, onTimer };
        }

        return item;
      }),
    }));
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
            onPlayTimer={this.onPlayTimer}
            onPauseTimer={this.onPauseTimer}
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
