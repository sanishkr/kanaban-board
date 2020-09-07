import React from 'react';

export default ({name, members, filteredTasks, openModalcb}) => {
  return (
    <section>
      <span> {name}
            </span>
        <div className="tasks">
          {
            filteredTasks.map((task) => 
            <div className="task">
                <span className="taskdescription">{task.description}</span>
                <span className="taskdue">{task.dueDate}</span>
                <span className="taskassigned">{members.find(m => m.id == task.assignee).name}</span>
            </div>
            )
          }
        </div>
      <button onClick={openModalcb}>Add Aonther Task</button>
    </section>
    

  )
}