import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    render() {
        return (
            <div>
                <input onChange={ e => this.setState({ term: e.target.value }) } />
                Value of the input { this.state.term }
            </div>
        );
    }
   
}