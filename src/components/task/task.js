import { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
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

  setDate = (date) =>
    formatDistanceToNow(date, { addSuffix: true, includeSeconds: true });

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
            <span className="created">
              created {this.setDate(task.created)} ago
            </span>
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
    );
  }
}

Task.defaultProps = {
  task: {},
  deleteTask: () => {},
  completedTask: () => {},
  editTask: () => {},
};

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  completedTask: PropTypes.func,
  editTask: PropTypes.func,
};

export default Task;
