import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { term: 'Initial State'};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    //onChange= { (event) => this.setState({term : event.target.value}) }
                    onChange= { event => this.onInputChange(event.target.value) }
                    //onChange={console.log(this.state)}
                />
                <br />Value of the input: {this.state.term}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term : term});
        console.log(term);
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;