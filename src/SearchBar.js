import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleSearchBarChange(searchTerm) {
    this.setState({ searchTerm })
    this.props.onChange(searchTerm)
  }

  render() {
    return (
          <div className="input">
            <h1>Search GIF</h1>
            <input
              type="text"
              placeholder="Search GIFs..."
              value={this.state.searchTerm}
              onChange={(ev) => this.handleSearchBarChange(ev.target.value)}
            />
          </div>
    )
  }
}

export default SearchBar