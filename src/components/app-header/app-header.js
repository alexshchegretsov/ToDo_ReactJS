import React from 'react';
import './app-header.css';

// header component
const AppHeader = function ({toDo, done}) {
    return (
        <div className="d-flex app-header">
            <h1>Todo App</h1>
            <h2>todo: {toDo} done: {done}</h2>
        </div>
    )
};

export default AppHeader;
