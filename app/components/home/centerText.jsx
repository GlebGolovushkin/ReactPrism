import React from 'react';

class CenterText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-5 col-md-offset-5" style={{paddingTop:250}}>
                <h2>{this.props.text}</h2>
            </div>);
    }
}
module.exports = CenterText;