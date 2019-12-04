import React from 'react'; //babel compile jsx to js within React help -> React.createElement()
import ReactDOM from 'react-dom';

// React.element() - little lightweight object,
// which creates within JSX-syntaxis.
const el = (
    <div>
        <h1>ToDo App</h1>
        <input type="text" placeholder="search" />
        <ul>
            <li>Learn React</li>
            <li>Create ToDo app</li>
        </ul>
    </div>
);

// ReactDOM - library which can transform VirtualDOM into Real
ReactDOM.render(el, document.getElementById("root"));