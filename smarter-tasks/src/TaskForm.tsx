import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      description: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (this.state.title.trim() !== "" && this.state.dueDate.trim() !== "") {
      const newTask = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        description: this.state.description,
      };
      this.props.addTask(newTask);
      this.setState({ title: "", dueDate: "", description: "" });
    }
  };

  handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<TaskFormState, keyof TaskFormState>);
  };

  render() {
    const { title, dueDate } = this.state;
    const isAddButtonDisabled = title.trim() === "" || dueDate.trim() === "";

    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
          className="border rounded px-3 py-2 focus:outline-none focus:border-black-900"
          placeholder="Title"
        />
        <br />
        <input
          type="text"
          id="todoDueDate"
          name="dueDate"
          value={this.state.dueDate}
          onChange={this.handleInputChange}
          className="border rounded px-3 py-2 focus:outline-none focus:border-blue-500 mt-2"
          placeholder="Due Date"
        />
        <br />
        <input
          type="text"
          id="todoDescription"
          name="description"
          value={this.state.description}
          onChange={this.handleInputChange}
          className="border rounded px-3 py-2 focus:outline-none focus:border-blue-500 mt-2"
          placeholder="Description"
        />
        <br />
        <button
          type="submit"
          id="addTaskButton"
          disabled={isAddButtonDisabled}
        >
          Add item
        </button>
        {isAddButtonDisabled && (
          <p className="text-red-500 mt-2">Please enter both title and due date.</p>
        )}
      </form>
    );
  }
}

export default TaskForm;
