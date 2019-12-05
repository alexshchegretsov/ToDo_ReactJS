import React from 'react'; //babel compile jsx to js within React help -> React.createElement()
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';
import SearchPanel from './components/search-panel';


// whole app component
const App = () => {
    const todoData = [
        {id: 1, label: "Drink Coffee", important: false},
        {id: 2, label: "Build App", important: true},
        {id: 3, label: "Ride bike", important: false},
    ];
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList todos={todoData}/>
        </div>
    )
};
// React.element() - little lightweight object,
// which creates within JSX-syntaxis.
// const el = <App/>;

// ReactDOM - library which can transform VirtualDOM into Real
// put App as an react-element(<App/>), not as component
ReactDOM.render(<App/>, document.getElementById("root"));