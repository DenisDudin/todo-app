import NewTaskForm from '../newTaskForm';
import TaskList from '../taskList';
import Footer from '../footer';
import { useState, useEffect, useRef } from 'react';

function ToDo() {
  const [taskId, setTaskId] = useState(3);
  const filters = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];
  const timer = useRef(false);
  const [filter, setFilter] = useState('all');
  const [taskList, setTaskList] = useState([
    {
      id: 't1',
      completed: false,
      text: 'First',
      created: new Date(2023, 4, 15, 3),
      minute: 11,
      second: 35,
      onTimer: false,
    },
    {
      id: 't2',
      completed: false,
      text: 'Second',
      created: new Date(2023, 4, 15, 2),
      minute: 0,
      second: 3,
      onTimer: false,
    },
  ]);

  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const deleteCompletedTask = () => {
    setTaskList(taskList.filter((item) => !item.completed));
  };

  const completedTask = (id, prop) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id && (item.seconds !== 0 || item.minute !== 0)) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    );
  };

  const editTask = (id, prop) => {
    setTaskList(
      taskList.map((item) => {
        console.log(prop);
        if (item.id === id) {
          return { ...item, text: prop.input };
        }
        return item;
      })
    );
  };

  const filteredTasks = (filterTask) => {
    switch (filterTask) {
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

  const addNewTask = (task) => {
    setTaskId(taskId + 1);
    const newTask = {
      id: `t${taskId}`,
      completed: false,
      text: task.inputValue,
      created: new Date(),
      minute: Number(task.minute),
      second: Number(task.second),
      onTimer: false,
    };
    setTaskList([...taskList, newTask]);
  };

  const onFilterSelect = (filterTask) => {
    setFilter(filterTask);
  };

  const toggleTimer = (id, сondition) => {
    setTaskList(
      taskList.map((item) => {
        console.log(item.id === id);
        if (item.id === id) {
          return { ...item, onTimer: сondition };
        }
        return item;
      })
    );
  };

  const onPlayTimer = (id) => {
    toggleTimer(id, true);
  };

  const onPauseTimer = (id) => {
    toggleTimer(id, false);
  };

  // const changeTime = () => {
  //   setTaskList(
  //     taskList.map((item) => {
  //       const { second: secondPrev, minute: minutePrev } = item;

  //       console.log(item.onTimer, item.completed);
  //       if (item.onTimer === true && item.completed === false) {
  //         let second = secondPrev;
  //         let minute = minutePrev;
  //         let completed = false;
  //         let onTimer = true;

  //         if (second === 0 && minute === 0) {
  //           completed = true;
  //           onTimer = false;
  //         }
  //         if (item.second > 0) {
  //           second -= 1;
  //         } else if (item.minute > 0) {
  //           second = 59;
  //           minute -= 1;
  //         }

  //         return { ...item, minute, second, completed, onTimer };
  //       }

  //       return item;
  //     })
  //   );
  // };

  useEffect(() => {
    if (!timer.current) {
      console.log(1);
      // timer.current = true;
      // setInterval(changeTime, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visibleTask = filteredTasks(filter);
  /* eslint no-param-reassign: 0 */
  const activeTask = taskList.reduce((count, task) => (task.completed === false ? (count += 1) : count), 0);
  /* eslint no-param-reassign: 0 */

  return (
    <div className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm addNewTask={addNewTask} />
      </header>
      <section className='main'>
        <TaskList
          tasks={visibleTask}
          deleteTask={deleteTask}
          completedTask={completedTask}
          editTask={editTask}
          onPlayTimer={onPlayTimer}
          onPauseTimer={onPauseTimer}
        />
        <Footer
          activeTask={activeTask}
          filters={filters}
          onFilterSelect={onFilterSelect}
          deleteCompletedTask={deleteCompletedTask}
        />
      </section>
    </div>
  );
}

export default ToDo;
