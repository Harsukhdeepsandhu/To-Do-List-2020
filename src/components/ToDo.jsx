import React, { useState, useEffect } from 'react';

const ToDo = ({ todo, toDoList, setToDoList }) => {

    const [textClassName, setTextClassName] = useState("");

    const deleteItem = () => setToDoList(toDoList.filter((toDoItem) => todo.key !== toDoItem.key));

    const completeItem = () => setToDoList(toDoList.map(toDoItem => toDoItem.key === todo.key ? { ...toDoItem, completed: !todo.completed } : toDoItem));

    useEffect(() => {
        if (todo.completed) {
            setTextClassName('task-finished');
        } else {
            setTextClassName("");
        }
    }, [toDoList]);

    return (
        <div>
            <h5 className={textClassName}>{todo.text}</h5>
            <button className="completed" onClick={completeItem}>Completed</button>
            <button className="delete" onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default ToDo;