import React from 'react';
import People from '../people/people.jsx'
 
class Team extends React.Component{
    constructor(props) {
        super(props);
        this.filterPeople = this.filterPeople.bind(this);
        this.state = {teamMembers:this.filterPeople(this.props.name)};
    }

    filterPeople(name){
        return this.props.prismMembers.filter(
            function(user){
                if (user.InTeam){
                return user.InTeam[name];
                }
                else {
                    return false;
                }
            }
        )
    }

    render(){
        return <People prismUsers={this.state.teamMembers} changeStateInTeam={this.props.changeStateInTeam} name={this.props.name}  team={true}/>;
    }
}
module.exports = Team;