import React, { useState } from 'react';

const Form = ({ toDoList, setToDoList }) => {

    const [textInput, setTextInput] = useState("");

    const setTextVal = (e) => {
        setTextInput(e.target.value);
    }

    const setToDoState = (e) => {
        e.preventDefault();
        setToDoList(
            [...toDoList,
            {
                text: textInput,
                completed: false,
                key: Math.random() * 10000
            }]
        );
        setTextInput("");
    }

    return (
        <form onSubmit={setToDoState}>
            <input value={textInput} onChange={setTextVal} type="text" placeholder="Your to-do here!" />
        </form>
    );
}

export default Form;