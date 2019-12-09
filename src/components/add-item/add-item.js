import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {
    state = {
        label: ""
    };

    onLabelChange = (e) => {
        e.persist();
        this.setState(() => {
            return {
                label: e.target.value
            }
        })
    };

    onSubmit = (e) => {
        // browser do not refresh page
        e.preventDefault();
        this.props.onAddItemAppLevel(this.state.label)
    };

    render() {
        return (
            <form className="item-add d-flex"
                  onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control"
                       placeholder="what needs to be done"
                       onChange={this.onLabelChange}
                />
                {/* button type must be submit!!!*/}
                <button type="submit"
                        className="btn btn-outline-primary"


                >
                    Add Task
                </button>
            </form>

        )
    }

};

