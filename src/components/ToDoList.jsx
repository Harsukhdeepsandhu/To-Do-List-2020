import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, setToDoList }) => {
    return (
        <div className="list-container">
            {toDoList.map(todo => (
                <ToDo setToDoList={setToDoList} toDoList={toDoList} key={todo.key} todo={todo} />
            ))}
        </div>
    );
}

export default ToDoList;