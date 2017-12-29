import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJson } from './actions/actionCreators';

class App extends Component {

    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/users')
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">asdf</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        error: state.error,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchJson(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
