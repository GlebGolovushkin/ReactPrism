import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.resetSession = this.resetSession.bind(this);
    }
    resetSession(){
        this.props.changeUserSessionName("");
    }
    render(){
        return (
            <header className="navbar navbar-inverse" role="banner">
                <a className="navbar-brand"  style={{cursor:'pointer'}}><i className="icon-home icon-white"></i> PRISM</a>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link> 
                        </li>
                        <li>
                            <Link to="/people">People</Link>
                        </li>
                        <li>
                            <Link to="/team">My team ({this.props.teamMembersNumber})</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right" style={{paddingRight:50}}>
                        <li>
                            <img width="50" src ="https://st3.depositphotos.com/1032749/14425/v/450/depositphotos_144256483-stock-illustration-logout-sign-icon.jpg" style={{cursor:'pointer'}} onClick={this.resetSession}></img> 
                        </li>
                        <li>
                            <a className="navbar-brand" style={{cursor:'pointer'}} onClick={this.resetSession}><i className="icon-home icon-white"></i> Sign out</a>
                        </li>
                    </ul>
            </header>
        )
    }
}
module.exports = Nav;