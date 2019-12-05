import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

// list component
const ToDoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        // label={item.label} important={item.important}
        return (
            <li key={id}
                className="list-group-item">
                <TodoListItem {...itemProps}/>
            </li>
        )

    });
    return <ul className="list-group todo-list"> {elements} </ul>
};

export default ToDoList;
