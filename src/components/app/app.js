import React, {Component} from 'react'; //babel compile jsx to js within React help -> React.createElement()
import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import FilterBar from '../filter-bar';
import AddItem from '../add-item';
import './app.css';


// whole app component
export default class App extends Component {

    maxID = 100;

    state = {
        todoData: [
            this.createItem("Drink Coffee"),
            this.createItem("Build App"),
            this.createItem("Ride Bike"),
            this.createItem("Learn React"),
        ],

    };

    createItem(label) {
        return {
            id: this.maxID++,
            important: false,
            done: false,
            label: label

        }
    }

    // del element by id without change previous state
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const data = todoData.filter((item) => item.id !== id);
            return {
                todoData: data
            }
        })
    };

    addItem = () => {
        // generate item id ?
        const item = this.createItem("Sleep");
        // add item to array
        this.setState(({todoData}) => {
            const newArray = [item, ...todoData];
            return {
                todoData: newArray
            }
        });
    };

    onToggleDone = (id) => {
        console.log("Toggle done", id)
    };

    onToggleImportant = (id) => {
        console.log("Toggle important", id)
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={this.state.todoData.length} done={4}/>

                <div className="search-filter-panel d-flex">
                    <SearchPanel/>
                    <FilterBar/>
                </div>

                <ToDoList
                    todos={this.state.todoData}
                    // для наглядности не сокращал до {this.deleteItem}
                    onDeleteAppLevel={(id) => this.deleteItem(id)}
                    onToggleDoneAppLevel={(id) => this.onToggleDone(id)}
                    onToggleImportantAppLevel={(id) => this.onToggleImportant(id)}
                />
                <AddItem
                    onAddItemAppLevel={() => this.addItem()}
                />
            </div>
        )
    }
}
