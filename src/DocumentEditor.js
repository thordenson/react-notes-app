import React from 'react';

class DocumentEditor extends React.Component {
render() {
    return (
        <div className="document-editor">
            <textarea 
                value={this.props.note.content}
                onChange={(e) => {
                    this.props.handleChange(e.target.value)
                }}
            />
        </div>
        );
    }
}


// A function component is like a 'render-only component.
// It can't have a state.
// It doesnt have a lifecycle methods like a componentDidiMount or constructor 

// const DocumentEditor = (props) => {
//     return (
//     <div className="document-editor">
//         <textarea value="This is a note."/>
//     </div>
//     )
// }

export default DocumentEditor;