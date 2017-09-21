import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyBpZzoTgB4JqiGHAf05Rd5GH9cdrfRnmII';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos : [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
            this.setState( { videos : data} );
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
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