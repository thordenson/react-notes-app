import React from 'react';

import SearchBar from './SearchBar';
import DocumentList from './DocumentList';
import DocumentEditor from './DocumentEditor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: -1,  // -1 means no selection
      notes: [
        {
          id: 1001,
          timestamp: new Date(),
          title: 'The Life and Times of Oakley',
          content: 'squeak squeak, mow mow.'
        },
        {
          id: 1002,
          timestamp: new Date(),
          title: 'The Life and Times of Milla',
          content: 'purr purr, drool drool.'
        }
      ]
    };
  }
  render() {
    return (
      <div className="notes-app">

        <SearchBar />
        <DocumentList
          allNotes={this.state.notes}
          handleSelection={this._selectNote}
        />
        <DocumentEditor
          note={this._getSelectedNote()}
        />
      </div>
    );
  }

  _updateNote = (noteContent) => {
    // grab existing note
    let theNote = this._getSelectedNote();

    // make a copy and update the copy

    // Version #1: Object.assign
    // let updatedNote = Object.assign({}, theNote);
    // updatedNote.content = noteContent;

    // Version #2: sprinkles! a.k.a. "Object spread"
    let updatedNote = {
      ...theNote,
      content: noteContent
    };

    // put the copy of the note in a copy of the array

    // Version #1: map
    // let notesArrayWithUpdatedNote = this.state.notes.map(note => {
    //   if (note.id === this.state.selectedId) {
    //     return updatedNote;
    //   } else {
    //     return note;
    //   }
    // });

    // Version #2: sprinkles! a.k.a. "Array spread"
    let notesArrayWithUpdatedNote = [
      ...this._allNotesExceptSelectedNote(),
      updatedNote
    ];

    // set the state
    this.setState({
      notes: notesArrayWithUpdatedNote
    });
  }

  _allNotesExceptSelectedNote = () => {
    let notesWithoutSelectedNote = this.state.notes.filter(note => note.id !== this.state.selectedId);
    return notesWithoutSelectedNote;
  }

  _getSelectedNote = () => {
    let theNote = this.state.notes.find(note => note.id === this.state.selectedId);
    if (!theNote) {
      theNote = this.state.notes[0];
    }
    return theNote;
  }

  _selectNote = (noteId) => {
    console.log(noteId);
    // I want to save the id
    // of the selected note.
    this.setState({
      selectedId: noteId
    });
  }

}

export default App;