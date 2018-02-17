import React from 'react';
import CenterText from './centerText.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.hello = this.hello.bind(this);
    }
    hello() {
        return "Hello " + this.props.name + "!";
    }
    render() {
        return (<CenterText text={this.hello()} />);
    }
}
module.exports = Home;