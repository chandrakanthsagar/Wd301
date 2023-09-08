import React,{useState} from "react";
import "./TaskCard.css"
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}

const TaskFormFC = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");


const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  console.log(`Submitted the form with`);
  if (formState.title.length === 0 || formState.dueDate.length === 0) {
    return;
  }
  props.addTask(formState);
  setFormState({ title: "", description: "", dueDate: "" });
};

const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  setFormState({ ...formState, title: event.target.value });
};
const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
  event
) => {
  console.log(`${event.target.value}`);
  setFormState({ ...formState, description: event.target.value });
};
const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  setFormState({ ...formState, dueDate: event.target.value });
};

return (
  <form onSubmit={addTask}>
    <input
      required
      type="text"
      id="todoTitle"
      name="title"
      value={formState.title}
      onChange={titleChanged}
      className="border rounded px-3 py-2 focus:outline-none focus:border-black-900"
      placeholder="Title"
    />
    <br />
    <input
      required
      type="text"
      id="todoDueDate"
      name="dueDate"
      value={formState.dueDate}
      onChange={dueDateChanged}
      className="border rounded px-3 py-2 focus:outline-none focus:border-blue-500 mt-2"
      placeholder="Due Date"
    />
    <br />
    <input
      type="text"
      id="todoDescription"
      name="description"
      value={formState.description}
      onChange={descriptionChanged}
      className="border rounded px-3 py-2 focus:outline-none focus:border-blue-500 mt-2"
      placeholder="Description"
    />
    <br />
    <button type="submit" id="addTaskButton">Add item</button>
  </form>
);
};
  export default TaskFormFC;


