import React, { useEffect, useState } from 'react'
import ShowToDoList from './ShowToDoList';

const TodoList = () => {

  const [task, setTask] = useState(''); // for form only
  const [allTasks, setAllTasks] = useState([]); // for list creation
  const [isTimeSpecific, setIsTimeSpecific] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    const updateTask = [
      ...allTasks,
      {
        taskName: task,
        type: "work"
      }
    ];
    setAllTasks(updateTask);
  }

  return (
    <div className='d-flex flex-column gap-3'>
      <form onSubmit={(e) => handleAdd(e)} className='d-flex flex-column gap-3'>
        <h4>What needs to be done?</h4>
        <div className='d-flex flex-row'>
        <input
        className="form-control"
        type="text"
        value={task}
        onChange={(e) =>
        {
          e.preventDefault();
          setTask(e.target.value)}
        }
        />&nbsp;
        {/* For time specific todo */}
        <span
          onClick={() => setIsTimeSpecific(true)}
          style={{
            display: isTimeSpecific ? "none" : "block"
          }}
        >
          ⏰
        </span>
        {
          isTimeSpecific ?
          <div className='d-flex flex-row'>
            <input type="time"/>
            <span onClick={() => setIsTimeSpecific(false)}>❌</span>
          </div>
          : ''
        }
        </div>
        <input className='btn btn-warning' type="submit" value="Add" />
      </form>
      <hr/>
      <ShowToDoList allTasks={allTasks} />
    </div>
  )
}

export default TodoList
