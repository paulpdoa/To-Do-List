import React from 'react'

const Navbar = ({openAdd,changeBtn}) => {
    return (
        <nav className="navbar"> 
            <div className="title">
                To-do-List
            </div>
            {changeBtn ? <div style={{ background:"red" }} onClick={openAdd} className="addBtn">
                Close List
            </div> : <div onClick={openAdd} className="addBtn">
                Add List
            </div>}
        </nav>
    )
}

export default Navbar
