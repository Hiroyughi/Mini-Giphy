import React, { Component } from 'react';
import './App.css';
import GiphyList from './GiphyList'
import SearchBar from './SearchBar'
/*import _ from 'lodash'*/
import Trending from './Trending'
export const API_KEY = "GUTf8bfUqiw9qAOFftVEskEVydLsFKQ7"

class App extends Component {
  constructor() {
    super()

    this.state = {
      gifs: {}
    }
  }

  componentDidMount() {
    this.fetchGifs("")
  }

  fetchGifs(searchTerm) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=20`)
    .then( res => res.json() )
    .then(json => {
      if(json.error) {
        alert("Error")
      } else {
        this.setState({
          gifs: json
        })
      }
    })
  }

  render() {
    /*const fetchGifs = _.debounce((searchTerm) => {this.fetchGifs(searchTerm)}, 200)*/

    if(!this.state.gifs.data) {
      return null
    } else {
      return (
        <div className="Check search text">
          <SearchBar onChange={(searchTerm) => this.fetchGifs(searchTerm)} />
          <div className="Show images">
            <GiphyList gifs={this.state.gifs.data}/>
            <Trending/>
          </div>
          <h5>Powered by GIPHY</h5>
        </div>
      );
    }
  }
}

export default App;
