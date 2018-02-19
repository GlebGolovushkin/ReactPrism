import React from 'react';
import CenterText from './centerText.jsx';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.hello = this.hello.bind(this);
    }
    hello() {
        return "Hello " + this.props.sessions.sessionName + "!";
    }
    render() {
        return (<CenterText text={this.hello()} />);
    }
}

function mapStateToProps(state, ownProps){
    return {
        sessions: state.sessions
    };
}

module.exports = connect(mapStateToProps)(Home);