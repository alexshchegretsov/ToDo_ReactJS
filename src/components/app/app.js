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
            {id: 1, label: "Drink Coffee", important: false},
            {id: 2, label: "Build App", important: true},
            {id: 3, label: "Ride bike", important: false},
            {id: 4, label: "Learn React", important: true},
        ],

    };
    // del element by id without change previous state
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const data = todoData.filter((item) => item["id"] !== id);
            return {
                todoData: data
            }
        })
    };

    addItem = () => {
        // generate item id ?
        const item = {
            id: this.maxID++,
            important: false,
            label: "Sleep"
        };
        // add item to array
        this.setState(({todoData}) => {
            const newArray = [item, ...todoData];
            return {
                todoData: newArray
            }
        });
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
                />
                <AddItem
                    onAddItemAppLevel={() => this.addItem()}
                />
            </div>
        )
    }
}
