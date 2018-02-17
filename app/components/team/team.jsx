import React from 'react';
import People from '../people/people.jsx'
 
class Team extends React.Component{
    constructor(props) {
        super(props);
        this.filterPeople = this.filterPeople.bind(this);
        this.state = {teamMembers:this.filterPeople()};
    }

    filterPeople(){
        return this.props.prismMembers.filter(
            function(user){
                return user.InTeam;
            }
        )
    }

    render(){
        return <People prismUsers={this.state.teamMembers} changeStateInTeam={this.props.changeStateInTeam} team={true}/>;
    }
}
module.exports = Team;