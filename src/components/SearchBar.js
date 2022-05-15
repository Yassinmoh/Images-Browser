import React from 'react';
import '../index.css'
class SearchBar extends React.Component {
    state = { term: "" }
    OnFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment searchForm">
                <form onSubmit={this.OnFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Image</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;