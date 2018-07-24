import React from "react";
import DocumentList from './DocumentList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1> React Notes App </h1>
          <input type="text" />
        </header>

        <DocumentList />

        <div className="document-editor">
          <textarea value="This is a note."/>
        </div>
      </div>
    );
  }
}

export default App;
