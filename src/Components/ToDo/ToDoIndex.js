import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskToDo: [],
      input: "",
    };
  }

  createTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.input],
      input: "",
    });
  };

  Input = (e) => {
    this.setState({ input: e.target.value });
  };

  deleteTask = (e, index) => {
    this.setState({ taskToDo: [this.state.tasks] });
    this.state.tasks.splice(index, 1);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createTask}>
          <input
            onChange={(e) => this.Input(e)}
            type="text"
            value={this.state.input}
            required
          />
          <button type="submit" style={{ marginLeft: "10px" }}>
            Add Task
          </button>
        </form>
        {this.state.tasks.map((allTasks, index) => (
          <ul>
            {allTasks}
            <button
              index={index}
              onClick={(e) => this.deleteTask(e, index)}
              type="submit"
              style={{ marginLeft: "20px" }}
            >
              Delete
            </button>
          </ul>
        ))}
      </div>
    );
  }
}

export default ToDoList;