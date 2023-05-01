import React, { useState } from 'react'

function AddTask({ onSubmit }) {

    const [toDo, setToDo] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setToDo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(toDo);
        setToDo("");
    };

    return (
        <div className='text-center max-w-full rounded-b-3xl font-mono border w-2/3 shadow p-4'>
            <form onSubmit={handleSubmit}>
                <label className='text-xl '>
                    Add a task & click [ENTER]
                </label>
                <br />
                <br />
                <input value={toDo} onChange={handleChange} className="border shadow rounded-full p-2 w-9/12 " />
                <br />
                <br />
            </form>
        </div>
    )
}

export default AddTask