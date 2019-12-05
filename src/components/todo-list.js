import React from 'react';
import TodoListItem from './todo-list-item';

// list component
const ToDoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        // label={item.label} important={item.important}
        return <li key={id}><TodoListItem {... itemProps}/></li>
    });
    return <ul> {elements} </ul>
};

export default ToDoList;
