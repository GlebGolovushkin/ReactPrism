import React from 'react';
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.filterPeople(this.state.userName);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group col-xs-3 col-md-offset-4" style={{ paddingTop: 20 }}>
                    <input className="form-control"
                        value={this.state.userName}
                        onChange={(event) => this.setState({ userName: event.target.value })}
                        type="text" placeholder="akvelon username" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Find</button>
                    </span>
                </div>
            </form>
        );
    }
}
module.exports = SearchForm;