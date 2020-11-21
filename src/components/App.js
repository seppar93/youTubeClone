// Modules
import React, { Component } from 'react'
// Components
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

// Services 
import youTube from '../API/YouTube'

export default class App extends Component {
    state = {videos: [], selectedVideo: null}

    onTermSubmit = async (term) => {
         const response = await youTube.get('/search', {
            params: {
                q:term
            }
        })
        this.setState({videos: response.data.items})
    }
    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar 
                onTermSubmit={this.onTermSubmit}
                />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
                />
            </div>
        )
    }
}
