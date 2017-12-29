import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJson } from './actions/actionCreators';

class App extends Component {

    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/users')
    }

    render() {
        console.log(this.props)
        if (this.props.isLoading) {
            return (
                <div>...Loading</div>
            )
        }
        if (this.props.error) {
            return (
                <div>The following error has occured: {this.props.error}</div>
            )
        }
        return (
            <div className="App">
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
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
