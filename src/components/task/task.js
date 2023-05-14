import { Component } from "react";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.task.text,
      editing: false,
    };
  }

  onEditFieldKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        this.setState({
          text: this.props.task.text,
          editing: false,
        });
        break;
      case "Enter":
        this.props.editTask(this.props.task.id, this.state.text);
        this.setState({
          editing: false,
        });
        break;
      default:
        break;
    }
  };

  onEdit = () => {
    this.setState({
      editing: true,
    });
  };

  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { id, task, deleteTask, completedTask } = this.props;

    return (
      <li
        id={id}
        className={
          this.state.editing ? "editing" : task.completed ? "completed" : ""
        }
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            data-completed="completed"
            onChange={completedTask}
          />
          <label>
            <span className="description">{this.state.text}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit" onClick={this.onEdit}></button>
          <button className="icon icon-destroy" onClick={deleteTask}></button>
        </div>
        {this.state.editing ? (
          <input
            type="text"
            className="edit"
            value={this.state.text}
            onChange={this.onValueChange}
            defaultValue={this.text}
            onKeyDown={this.onEditFieldKeyDown}
            autoFocus={true}
          />
        ) : null}
      </li>
      /* <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Completed task</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
          <li className="editing">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Editing task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" value="Editing task" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Active task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
      </li> */
    );
  }
}

export default Task;
