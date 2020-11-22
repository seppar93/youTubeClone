// Modules
import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term)

    // TODO: add callback from parent
  }

  render() {
    return (
      <div className='Search-bar ui segment'>
        <form  onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>VIDEO SEARCH</label>
            <input type='text' value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
