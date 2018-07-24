import React from "react";
import DocumentList from './DocumentList';
import SearchBar from './SearchBar';
import DocumentEditor from './DocumentEditor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: -1, // -1 means no selection
      notes: [
        {
          id: 1001,
          timestanmp: new Date(),
          title: 'The Life and Times of Oakley',
          content: 'sqeak squeak, meow meow'
        },
        {
          id: 1002,
          timestanmp: new Date(),
          title: 'The Life and Times of Milla',
          content: 'purr purr, drool drool'
        }
      ]
    };
  }
  render() {
    return (
      <div className="notes-app">

        <SearchBar />
        <DocumentList allNotes= {this.state.notes}
        handleSelection={this._selectNote}
        />
        <DocumentEditor 
          note={this.state.notes[0]}
        />

      </div>
    );
  }

  _selectNote = (noteID) => {
    console.log(noteID);

  // I want to save the ID of the selected note.
  this.setState({
    selectedId: noteId
  });
  
  }

}

export default App;
