import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { term: 'Initial State'};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange= { (event) => this.setState({term : event.target.value}) }
                    //onChange={console.log(this.state)}
                />
                <br />Value of the input: {this.state.term}
            </div>
        );
    }
}

export default SearchBar;