import ReactDOM from 'react-dom';
import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/layout/nav.jsx';
import Home from './components/home/home.jsx';
import Team from './components/team/team.jsx';
import People from './components/people/people.jsx';
import NotFound from './components/errorPage/notFound.jsx';
import SignIn from './components/logIn/signIn.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    userName: "Gleb",
                    password: "123"
                },
                {
                    userName: "Volodya",
                    password: "1234"
                },

            ], myName: "",
            prismMembers: [],
            teamMembersNumber: 0
        };
        this.sortPrismMembersByName = this.sortPrismMembersByName.bind(this);
        this.changeUserSessionName = this.changeUserSessionName.bind(this);
        this.changeStateInTeam = this.changeStateInTeam.bind(this);
        this.sortPrismMembersByName();
    }

    changeUserSessionName(myName) {
        this.setState({ myName });
    }

    changeStateInTeam(id) {
        var users = this.state.prismMembers;
        users.data.forEach(user => {
            if (user.Id == id) {
                if (!user.InTeam) {
                    user.InTeam = true;
                    this.setState({ teamMembersNumber: this.state.teamMembersNumber + 1 });
                }
                else {
                    user.InTeam = false;
                    this.setState({ teamMembersNumber: this.state.teamMembersNumber - 1 });
                }
                this.setState({ prismMembers: users });
            }
        });
    }

    sortPrismMembersByName() {
        Axios.get('http://prism.akvelon.net/api/employees/all')
            .then(members => {
                members.data = members.data.sort(
                    function (a, b) {
                        return (a.FirstName > b.FirstName) ? 1 : ((b.FirstName > a.FirstName) ? -1 : 0);
                    });
                this.setState({ prismMembers: members });
            });
    }

    render() {
        if (this.state.myName) {
            return (
                <Router>
                    <div>
                        <Nav changeUserSessionName={this.changeUserSessionName.bind(this)} teamMembersNumber={this.state.teamMembersNumber}/>
                        <Switch>
                            <Route exact path="/" render={(props) => (<Home name={this.state.myName} />)} />
                            <Route path="/people" render={(props) => (<People prismUsers={this.state.prismMembers.data} changeStateInTeam={this.changeStateInTeam.bind(this)} team={false}/>)} />
                            <Route path="/team" render={(props) => (<Team prismMembers={this.state.prismMembers.data} changeStateInTeam={this.changeStateInTeam.bind(this)}/>)}  />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>)
        }
        else return (<SignIn users={this.state.users} changeName={this.changeUserSessionName.bind(this)} />);
    }
}


ReactDOM.render(<App />, document.getElementById("app"))