import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBpZzoTgB4JqiGHAf05Rd5GH9cdrfRnmII';

class App extends Component {
    constructor(args) {
        super(args);

        this.state = {
            videos : [],
            selectedVideo: null
        };

       this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState( {
                videos : data,
                selectedVideo: data[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)

        console.log(this.state);
        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}



//create a new component. This component should produce some HTML.
// const App = () => {
//     return (<div>
//         <SearchBar />
//     </div>);
// }


//Take this components's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App/>, document.querySelector('.container'));

export default App;