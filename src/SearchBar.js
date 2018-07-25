import React from 'react';

class SearchBar extends React.Component {
render() {
    return (
        <div className="App">
            <header>
                <h1> React Notes App </h1>
                <input type="text" 
                value={this.props.text}
                onChange={(e) => {
                    this.props.handleChange(e.target.value)
                }}
                />
            </header>
        </div>
        );
    }
}

export default SearchBar;