import React from 'react';
import People from '../people/people.jsx'
 
class Team extends React.Component{
    constructor(props) {
        super(props);
        this.filterPeople = this.filterPeople.bind(this);
        this.updateTeam = this.updateTeam.bind(this);
        this.state = {teamMembers:this.filterPeople()};
    }

    filterPeople(){
        return this.props.prismMembers.filter(
            function(user){
                return user.InTeam;
            }
        )
    }

    updateTeam(id){
        this.props.changeStateInTeam(id);
        var newTeam = this.filterPeople();
        this.setState(() => ({
            teamMembers: this.filterPeople()
          }));
    }

    render(){
        return <People prismUsers={this.state.teamMembers} changeStateInTeam={this.updateTeam} team={true}/>;
    }
}
module.exports = Team;