import Axios from 'axios'

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: process.env.REACT_APP_API_KEY
    }
})