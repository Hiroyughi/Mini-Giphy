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
  onChangetype = (ev) => {
    this.handleSearchBarChange(ev.target.value)
  }
  render() {
    return (
          <div className="input">
            <h1>Search GIF</h1>
            <input
              type="text"
              placeholder="Search GIFs..."
              value={this.state.searchTerm}
              /*onChange={(ev) => this.handleSearchBarChange(ev.target.value)}*/
              onChange = {this.onChangetype}
            />
          </div>
    )
  }
}

export default SearchBar
