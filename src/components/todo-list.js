import React from 'react';
import TodoListItem from './todo-list-item';

// list component
const ToDoList = ({todos}) => {
    const elements = todos.map((item) => {
        // label={item.label} important={item.important}
        return <li><TodoListItem {... item}/></li>
    });
    return <ul> {elements} </ul>
};

export default ToDoList;
