import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

    render() {

        const {label, important = false} = this.props;
        const style = {
            color: important ? "steelblue" : "black",
            fontWeight: important ? "bold" : "normal",
        };
        return (
            <span className="todo-list-item">

            <span style={style} className="todo-list-item-label">
                {label}
            </span>

            <button type="button" className="btn btn-outline-danger float-right">
                    <i className="fa fa-trash-o"/>

            </button>
                <button type="button" className="btn btn-outline-success float-right">
                    <i className="fa fa-exclamation"/>
                </button>
        </span>
        )
    };
}

