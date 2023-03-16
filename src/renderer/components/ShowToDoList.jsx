import React from 'react'

const ShowToDoList = ({ allTasks }) => {
  return (
    <div className='d-flex flex-column gap-3'>
      <h5 style={{
        textAlign: "center"
      }}>To-Do List</h5>
      <ul>
      {
        allTasks.map((list, i) => {
          return (
          <li key={i}>
            <input className='form-check-input' type='checkbox'></input>&nbsp;
            {list.taskName}
          </li>)
        })
      }
      </ul>
    </div>
  )
}

export default ShowToDoList
