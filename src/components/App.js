import React from 'react';
import '../App.css';
import unsplash from '../api/unspalsh';
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term },

    })
    this.setState({ images: res.data.results })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <span className="found-span">Found: {this.state.images.length} images</span>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
