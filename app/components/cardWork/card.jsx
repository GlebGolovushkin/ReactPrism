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
              debugger;
              if (this.props.team && this.props.InTeam)
              {
                return(
                    <div className="panel panel-default col-lg-3" style={{margin: '1em'}}>
                        <div className="panel-heading">
                            <div style={{fontSize: '1em', fontWeight: 'bolt'}}>
                                {this.props.FirstName + " " + this.props.LastName}
                            </div>
                        </div>
                        <div className="panel-body row">
                            <div className="col-lg-4" style={{margin: '1em'}}>
                                <img width="150" src = {this.state.photo}  onClick={this.changeStateInTeam}/>
                            </div>
                            <div className="col-md-12 col-md-offset-6">
                                <button className="btn" onClick={this.changeStateInTeam}>Remove from my team</button>
                            </div>
                        </div>
                    </div>
                );
              }
              else if (this.props.team===false){
                if (!this.props.InTeam)
                {
                      return(
                          <div className="panel panel-default col-lg-3" style={{margin: '1em'}}>
                              <div className="panel-heading">
                                  <div style={{fontSize: '1em', fontWeight: 'bolt'}}>
                                      {this.props.FirstName + " " + this.props.LastName}
                                  </div>
                              </div>
                              <div className="panel-body row">
                                  <div className="col-lg-4" style={{margin: '1em'}}>
                                      <img width="150" src = {this.state.photo} onClick={this.changeStateInTeam} />
                                  </div>
                                  <div className="col-md-12 col-md-offset-7">
                                      <button className="btn" onClick={this.changeStateInTeam}>Add to my team</button>
                                  </div>
                              </div>
                          </div>
                      );
                }
                else if (this.props.InTeam)
                {
                    return(
                        <div className="panel panel-default col-lg-3" style={{margin: '1em'}}>
                            <div className="panel-heading">
                                <div style={{fontSize: '1em', fontWeight: 'bolt'}}>
                                    {this.props.FirstName + " " + this.props.LastName}
                                </div>
                            </div>
                            <div className="panel-body row">
                                <div className="col-lg-4" style={{margin: '1em'}}>
                                    <img width="150" src = {this.state.photo}  />
                                </div>
                                <div className="col-md-12 col-md-offset-6">
                                    <button className="btn" onClick={this.changeStateInTeam}>Remove from my team</button>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
            else return(null);   
          }
        }
module.exports = Card;