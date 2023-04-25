import React, { useState } from 'react';

export const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    setTasks(tasks.concat({ task: newTask, done: false }));
    setNewTask('');
  };

  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const editTask = (taskIndex, newTaskName) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].task = newTaskName;
    setTasks(updatedTasks);
  };

  const resetTasks = () => {
    setTasks([]);
  };

  const toggleDone = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;
    setTasks(updatedTasks);
  };

  const moveTask = (currentIndex, newIndex) => {
    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks.splice(currentIndex, 1)[0];
    updatedTasks.splice(newIndex, 0, taskToMove);
    setTasks(updatedTasks);
  };

  return (
    <div className="card" style={{ width: "25rem" }}>
        <div className="card-header">ToDo</div>
        <div className="card-body">
            <form onSubmit={addTask}>
                <div className="row">
                    <div className="col-8">
                        <input type="text" className="form-control" value={newTask} onChange={handleNewTaskChange} />
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary mr-2">Add Task</button>
                    </div>
                </div>


            </form>
            <br/>
            <ul className="list-group">
                {tasks.map((task, index) => (
                <li className="list-group-item" key={index}>
                    <input type="checkbox" className="form-check-input me-1" checked={task.done} onChange={() => toggleDone(index)} />
                    <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.task}</span>
                    <button className="btn btn-outline-danger " onClick={() => deleteTask(index)}>X</button>
                    <button className="btn btn-outline-warning" onClick={() => editTask(index, prompt('Enter new task name:'))}>Edit🖊️</button>
                    {index !== 0 && <button className="btn btn-outline-secondary" onClick={() => moveTask(index, index - 1)}>↑</button>}
                    {index !== tasks.length - 1 && <button className="btn btn-outline-secondary" onClick={() => moveTask(index, index + 1)}>↓</button>}

                </li>
                ))}
            </ul>
            <br/>
            <button className="btn btn-outline-success" onClick={resetTasks}>Reset All Tasks</button>
        </div>
    </div>
  );
};

export default ToDo;
