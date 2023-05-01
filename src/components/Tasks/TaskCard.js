import React, { useState } from 'react';


function TaskCard({ task, onDelete }) {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };

    const handleDelete = () => {
        onDelete(task.index);
    };

    let content = (<div className='border shadow p-4 rounded-full text-center m-4' >
        <h2 className='text-xl font-bold'>Task</h2>
        <div className='border rounded-full p-6 m-3 bg-amber-50'>{task}</div>

        <div>
            <br />
            <label >
                Finished? &nbsp;
                <input className='' type="checkbox" checked={checked} value={checked} onChange={handleCheck} />
            </label>
            <br />
            <button onClick={handleDelete} className="border p-3 rounded-full font-bold hover:bg-red-300">Delete task</button>
        </div>
    </div>)

    if (checked === true) {
        return (<div className='border font-mono rounded-full p-4 text-center m-4'>
            <p className='text-xl'> 
                Done 😍
                <br /> <br />
                <button onClick={() => setChecked(false)}
                className="border p-3 rounded-full font-bold hover:bg-yellow-300"
                >
                    Reverse
                </button>
            </p>
        </div>)
    };

    return (
        <div className='font-mono'>
            {content}
        </div>
    )
}

export default TaskCard