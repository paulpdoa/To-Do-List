import React from 'react'
import {FaTimes} from 'react-icons/fa';

const Lists = ({lists,deleteList}) => {
    
    return (
        <div className="lists"> 
            {lists.map((list) => (
                <div className="list-card" key={list.id}>
                    <h2 style={{ display:"flex",justifyContent:"space-between" }}>{list.todo} <FaTimes onClick={() => deleteList(list.id)} style={{ cursor:"pointer",color:"red" }} /></h2>
                    <p>{list.day}</p>
                </div>
            ))}
        </div>
    )
}

export default Lists
