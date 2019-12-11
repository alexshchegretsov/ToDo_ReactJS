import React, {Component} from 'react';
import './search-panel.css';
// search panel component
export default class SearchPanel extends Component {

    state = {
        label: "",
        reserve: this.props.primalData
    };

    onSearchInput = (e) => {
        console.log(this.state.reserve);
        this.props.onSearchAppLevel(e.target.value, this.state.reserve);
    };

    render() {
        return <input
            className="form-control search-input"
            type="text"

            onChange={this.onSearchInput}
            placeholder="Type here to search"
        />
    }

};

