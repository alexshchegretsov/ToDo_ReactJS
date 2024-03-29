import React from 'react'; //babel compile jsx to js within React help -> React.createElement()
import ReactDOM from 'react-dom';
import App from './components/app';



// React.element() - little lightweight object,
// which creates within JSX-syntaxis.
// const el = <App/>;

// ReactDOM - library which can transform VirtualDOM into Real
// put App as an react-element(<App/>), not as component
ReactDOM.render(<App/>, document.getElementById("root"));