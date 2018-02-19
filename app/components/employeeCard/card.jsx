import React from 'react';

class Card extends React.Component{
            constructor(props){
                super(props);
                this.state = {photo:"http://prism.akvelon.net/api/system/getphoto/" + this.props.Id};
                this.changeStateInTeam = this.changeStateInTeam.bind(this);
            }

            changeStateInTeam(){
                this.props.changeStateInTeam(this.props.Id);
            }

          render(){
              if (this.props.team && !this.props.InTeam[this.props.name])
              {
                return(null); 
              }
              else {
                return(
                    <div className="panel panel-default col-lg-3" style={{margin: '1em'}}>
                        <div className="panel-heading">
                            <div style={{fontSize: '1em', fontWeight: 'bolt'}}>
                                {this.props.FirstName + " " + this.props.LastName}
                            </div>
                        </div>
                        <div className="panel-body row">
                            <div className="col-lg-4" style={{margin: '1em'}}>
                            {
                                this.props.team?
                                <img width="150" src = {this.state.photo}  onClick={this.changeStateInTeam}/> :
                                <img width="150" src = {this.state.photo}/> 
                            }
                            </div>
                            <div className={this.props.InTeam ? (this.props.InTeam[this.props.name]? "col-md-12 col-md-offset-6" : "col-md-12 col-md-offset-7") : "col-md-12 col-md-offset-7"}>
                                <button className="btn" onClick={this.changeStateInTeam}>{this.props.InTeam ? (this.props.InTeam[this.props.name]? "Remove from my team" : "Add to my team") : "Add to my team"}</button>
                            </div>
                        </div>
                    </div>
                );
              }
          }
        }
module.exports = Card;