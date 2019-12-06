import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };
    // class field with arrow func
    onLabelClick = () => {
        // console.log(`${this.props.label}`);
        // idiotic syntax
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    };

    onMarkImportant = () => {
        this.setState(({important})=>{
            return {
                important: !important
            }
        })
    };

    render() {

        const {label, onDeleteListLevel} = this.props;
        // const style = {
        //     color: important ? "steelblue" : "black",
        //     fontWeight: important ? "bold" : "normal",
        // };
        let buttonClassGreen = "btn btn-outline-success float-right";
        let classNames = "todo-list-item";
        const {done, important} = this.state;
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
                onClick={this.onLabelClick}
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
                        onClick={this.onMarkImportant}>
                    <i className="fa fa-exclamation"/>
                </button>
        </span>
        )
    };
}

