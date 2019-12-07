import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({
                          label,
                          onDeleteListLevel,
                          onToggleDoneListLevel,
                          onToggleImportantListLevel,
                          important,
                          done
                      }) => {
    let buttonClassGreen = "btn btn-outline-success float-right";
    let classNames = "todo-list-item";

    if (done) {
        classNames += " done"
    }
    if (important) {
        classNames += " important";
        buttonClassGreen = "btn btn-success float-right";
    }
    return (
        <span className={classNames}>

            <span

                className="todo-list-item-label"
                // add event listener
                onClick={onToggleDoneListLevel}
            >
                {label}
            </span>

            <button type="button"
                    className="btn btn-outline-danger float-right"
                    onClick={onDeleteListLevel}
            >
                    <i className="fa fa-trash-o"/>

            </button>
                <button type="button"
                        className={buttonClassGreen}
                    // onClick={this.onMarkImportant}
                        onClick={onToggleImportantListLevel}

                >
                    <i className="fa fa-exclamation"/>
                </button>
        </span>
    )
};

export default TodoListItem;

