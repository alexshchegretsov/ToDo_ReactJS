import React from 'react'; //babel compile jsx to js within React help -> React.createElement()
import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import FilterBar from '../filter-bar';
import './app.css';

// whole app component
const App = () => {
    const todoData = [
        {id: 1, label: "Drink Coffee", important: false},
        {id: 2, label: "Build App", important: true},
        {id: 3, label: "Ride bike", important: false},
        {id: 4, label: "Learn React", important: true},
    ];
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={4}/>
            <div className="search-filter-panel d-flex">
                <SearchPanel/>
                <FilterBar/>
            </div>

            <ToDoList
                todos={todoData}
                onDeleteAppLevel={(id)=> console.log("deleted id ", id)}
            />
        </div>
    )
};

export default App;