import React from 'react';
import Axios from 'axios';
import CardList from '../employeeCard/cardList.jsx';
import SearchForm from './searchForm.jsx';
import CenterText from '../home/centerText.jsx';

class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredPeople: this.props.prismUsers
        };
        this.filterPeople = this.filterPeople.bind(this);
    }

    filterPeople(text) {
        var filtered = this.props.prismUsers.filter(function (user) {
            return user.FirstName.toLowerCase().includes(text) || user.LastName.toLowerCase().includes(text);
        });
        this.setState({ filteredPeople: filtered });
    }

    render() {
        return (this.state.filteredPeople.length==0 ? <CenterText text="There are no people in your team"/> :      
            <div style={{ display: 'inline-block', marginLeft: 200 }}>
                <div>
                    <SearchForm filterPeople={this.filterPeople.bind(this)} />
                    <CardList cards={this.state.filteredPeople} changeStateInTeam={this.props.changeStateInTeam} name={this.props.name}  team = {this.props.team}/>
                </div>
            </div>);
    }
}
module.exports = People;