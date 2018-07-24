import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1> React Notes App </h1>
          <input type="text" />
        </header>

        <div className="document-list">
          <ul>
            <li className="document-list-item">Note number one</li>
            <li className="document-list-item">Note number two</li>
            <li className="document-list-item">Note number three</li>
          </ul>
        </div>

        <div className="document-editor">
          <textarea value="This is a note."/>
        </div>
      </div>
    );
  }
}

export default App;
