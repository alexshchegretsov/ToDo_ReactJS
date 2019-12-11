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
        this.props.onAddItemAppLevel(this.state.label);
        this.setState({label: ""})
    };
    /* onSubmit -> setState -> label: "message" -> label: ""
    *  state changes -> React update elements by calling render()
    *  in render() we update value={this.state.label}
    *  When we set value by program - it is not onChange event
    *  React component controls element
    *  If we can set elements value by state value - we call this element "controlled element"
    * */
    render() {
        return (
            <form className="item-add d-flex"
                  onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control"
                       placeholder="what needs to be done"
                       onChange={this.onLabelChange}
                       value={this.state.label}
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

