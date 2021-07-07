import React from 'react'
import { useState } from 'react'
const AddList = ({addList}) => {

    const [todo,setTodo] = useState('');
    const [day,setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        addList({todo,day})
    }

    return (
        <form onSubmit={onSubmit} className="list-form">
            <div className="add-list">
             <h1>Add List</h1>
                <div className="list-input">
                    <label htmlFor="to-do">To-Do</label><br/>
                    <input type="text" onChange={(e) => setTodo(e.target.value)} name="todo" placeholder="Add to-do" required />
                </div>
                <div className="list-input">
                    <label htmlFor="day">Day</label><br/>
                    <input type="text" name="day" onChange={(e) => setDay(e.target.value)} placeholder="Add day" required />
                </div>
                <div className="listBtn">
                    <button>Save List</button>                
                </div>
            </div>
        </form>
    )
}

export default AddList
