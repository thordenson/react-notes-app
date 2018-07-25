import React from 'react';

import SearchBar from './SearchBar';
import DocumentList from './DocumentList';
import DocumentEditor from './DocumentEditor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
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
        },
        {
          id: 1003,
          timestamp: new Date(),
          title: 'All the Things',
          content: 'stuffs stuffy stuff stuff.'
        },
        {
          id: 1004,
          timestamp: new Date(),
          title: 'The secret code to all the presidents rubies',
          content: 'Burt Tyrannosaurus Macklin.'
        }
      ]
    };
  }

  render() {
    return (
      <div className="notes-app">

        <SearchBar
          text={this.state.searchText}
          handleChange={this._updateSearchText}
        />
        <DocumentList
          allNotes={this._getFilteredNotes()}
          handleSelection={this._selectNote}
        />
        <DocumentEditor
          note={this._getSelectedNote()}
          handleChange={this._updateNote}
        />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      selectedId: this.state.notes[0].id
    });
  }

  _updateSearchText = (newSearchText) => {
    this.setState({
      searchText: newSearchText
    });
  }

  _updateNote = (noteContent) => {
    // grab existing note
    let theNote = this._getSelectedNote();

    // make a copy of the selected note and update the copy

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
      updatedNote,
      ...this._allNotesExceptSelectedNote()
    ];

    // set the state
    this.setState({
      notes: notesArrayWithUpdatedNote
    });
  }

  _allNotesExceptSelectedNote = () => {
    let selectedId = this.state.selectedId;
    if (selectedId === -1) {
      selectedId = this.state.notes[0].id;
    }
    let notesWithoutSelectedNote = this.state.notes.filter(note => note.id !== selectedId);
    return notesWithoutSelectedNote;
  }

  _getFilteredNotes = () => {
    // Is there any search text
    if (this.state.searchText !== '') {
      // If so, filter the notes
      let filteredNotes = this.state.notes.filter(note => {
        let doesTitleMatch = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());

        let doesContentMatch = note.content.toLowerCase().includes
        (this.state.searchText.toLowerCase());


        return doesTitleMatch || doesContentMatch;
      });
      return filteredNotes;
    } else {
        // If not, return all the notes
      return this.state.notes
      }
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