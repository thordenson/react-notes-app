import React from "react";
import DocumentList from './DocumentList';
import SearchBar from './SearchBar';
import DocumentEditor from './DocumentEditor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }
  render() {
    return (
      <div className="notes-app">

        <SearchBar />
        <DocumentList />
        <DocumentEditor />

      </div>
    );
  }
}

export default App;
