import React from 'react'; //babel compile jsx to js within React help -> React.createElement()
import ReactDOM from 'react-dom';

// list component
const ToDoLIst = () => {
    const items = ["Learn React", "Build Awesome App"];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    )
};
// search panel component
const SearchPanel = () => {
    const searchType = "Type here to search";
    const searchStyle = {
        fontSize: "20px"
    };

    return <input
        type="text"
        placeholder={searchType}
        style={searchStyle}
    />
};
// header component
const AppHeader = function () {
    return <h1>ToDo App</h1>
};

// element
const someElement = <h1>I am an element</h1>;

// component
const SomeComponent = () => <h1>I am a component!</h1>;

// whole app component
const App = () => {
    const isLoggedIn = false;
    const LoginBox = function () {
        return (
            <form action="" method="POST">

                <input type="text" name="login" placeholder="login"/><br/>
                <input type="password" name="pass" placeholder="password"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    };
    return (
        <div>
            <SomeComponent/>
            {someElement}
            {isLoggedIn ? null : <LoginBox/>}
            <AppHeader/>
            <SearchPanel/>
            <ToDoLIst/>
        </div>
    )
};
// React.element() - little lightweight object,
// which creates within JSX-syntaxis.
// const el = <App/>;

// ReactDOM - library which can transform VirtualDOM into Real
// put App as an react-element(<App/>), not as component
ReactDOM.render(<App/>, document.getElementById("root"));