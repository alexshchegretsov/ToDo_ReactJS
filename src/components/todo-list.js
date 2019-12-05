import React from 'react';
import TodoListItem from './todo-list-item';

// list component
const ToDoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink Coffee"/></li>
            <li><TodoListItem label="Build Awesome App" important/></li>
        </ul>
    )
};
export default ToDoList;
