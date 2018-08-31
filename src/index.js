import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/List.js';
import './index.css';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);