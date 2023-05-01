import React from 'react'
import TaskCard from './TaskCard'

function TaskList({ taskList, onDelete }) {




    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
                {taskList.map((task, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-3/4">
                        <TaskCard onDelete={() => onDelete(index)} task={task.label} />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default TaskList;