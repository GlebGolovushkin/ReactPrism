import React from 'react';

class CenterText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4" style={{paddingTop:250}}>
                <h2>{this.props.text}</h2>
            </div>);
    }
}
module.exports = CenterText;