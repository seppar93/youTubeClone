// Modules
import React, { Component } from 'react'
// Components
import SearchBar from './SearchBar'

// Services 
import youTube from '../API/YouTube'

export default class App extends Component {
    onTermSubmit = (term) => {
        youTube.get('/search', {
            params: {
                q:term
            }
        })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar 
                onTermSubmit={this.onTermSubmit}
                />
            </div>
        )
    }
}
