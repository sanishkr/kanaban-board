import React, { useState } from 'react';

export default ({id, desc='', due='', assigneeid, state, members, openModalcb, addtocb, editcb}) => {
  const saveTask = () => {
    // console.log({ description, dueDate, assigneeId, taskState });
    if (id) {
      // editcb({ description, dueDate, assignee: assigneeId, state:taskState })
    } else {
      addtocb({ id: Date.now(), description, dueDate, assignee: assigneeId, state:taskState })
    }
    openModalcb(false);
  }
  const [description, setDescription] = useState(desc)
  const [dueDate, setDueDate] = useState(due)
  const [assigneeId, setAssigneeId] = useState(assigneeId || null)
  const [taskState, setTaskState] = useState(state)
  return (
    <div className="newtask">
        <div>
          <input placeholder="task Description" value={description || ""} onChange={(e) => setDescription(e.target.value)} />
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          <select onChange={(e) => setTaskState(e.target.value)}>
            <option value="Planned">Planned</option>
            <option value="Started">Started</option>
            <option value="Done">Done</option>
          </select>
          <select onChange={(e) => setAssigneeId(e.target.value)}>
            {
              members.map((m) => 
                <option value={m.id} key={m.id}>{m.name}</option>      
              )
            }
          </select>
          <button onClick={saveTask}>Save</button>
          <button onClick={()=> openModalcb(false)}>Cancel</button>
        </div>
      </div>
  )
}