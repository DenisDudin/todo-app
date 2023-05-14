import { Component } from "react";

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onEditFieldKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.addNewTask(this.state.inputValue);
      this.state.inputValue = "";
    }
  };

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={this.state.inputValue}
        onChange={this.onValueChange}
        onKeyDown={this.onEditFieldKeyDown}
        autofocus
      />
    );
  }
}

export default NewTaskForm;
