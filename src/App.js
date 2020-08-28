import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    setToDoList(JSON.parse(localStorage.getItem('toDoListStorageSandhu')));
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoListStorageSandhu', JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="app-container">
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
