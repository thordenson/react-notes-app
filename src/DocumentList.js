import React from 'react';

class DocumnentList extends React.Component {
render() {
    let items = this.props.allNotes.map(note => {
        return (<li className="document-list-item" 
        key={note.id}>
            <a href="#" onClick={() => {
                this.props.handleSelection(note.id);
            }}>
                {note.title}
            </a>
        </li>
        );
    } 
);

// Can be written in hster code as:
// render() {
//     let items = this.props.allNotes.map(note => (
//         <li className="document-list-item">
//         {note.title}
//         </li>
//         )

//     );


    return (

        <div className="document-list">
            <ul>
                {items}
            </ul>
        </div>
        );
    }
}

export default DocumnentList;