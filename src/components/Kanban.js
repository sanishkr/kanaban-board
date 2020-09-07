import React, { useState } from 'react';
import KanbanSection from './KanbanSection';
import NewTask from './NewTask';

export default ({ tasks, members, ...props }) => {
  console.log({tasks});
  
  const [modalOpen, setModalOpen] = useState(false);
  const PlannedTasks = tasks.filter((t) => t.state === 'Planned');
  const StartedTasks = tasks.filter((t) => t.state === 'Started');
  const DoneTasks = tasks.filter((t) => t.state === 'Done');

  console.log({DoneTasks,StartedTasks});
  
  return (
    <div className="kanban">
      <KanbanSection name="Planned" members={members} filteredTasks={PlannedTasks} openModalcb={() => setModalOpen(true)} />
      <KanbanSection name="Started" members={members} filteredTasks={StartedTasks} openModalcb={() => setModalOpen(true)} />
      <KanbanSection name="Done" members={members} filteredTasks={DoneTasks} openModalcb={() => setModalOpen(true)} />
      {
        modalOpen ?
          <NewTask
            members={members}
            addtocb={props.addTodocb}
            openModalcb={(val) => setModalOpen(val)} />
          : null
      }
    </div>
  )
}