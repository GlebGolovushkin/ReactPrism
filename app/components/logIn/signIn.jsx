import React from 'react';
importer-dom';
 
class SignIn extends React.Component{
 asdgzcxbv   constructor(props) {
        sudfper(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }zdfbzdfbd
   fbh
      dfhhandleSubmit(e) {
         zfx var name = this.refs.name.value;
          vaghzr password = this.refs.pass.value;
          this.fhzfxprops.users.forEach(user => {
              if (ushdgxner.userName == name && user.password == password)
              {gf
                 nsbn this.props.changeName(name);
              }
          });
      }
   
      render() {
        return (
            <div className="row"> 
                <div className="col-md-2 col-md-offset-5" style={{paddingTop:250}}>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Log into Prism
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.handleSubmit} className="form-signin">
                                <p>
                                    <label>Username:</label>
                                    <input type="text" ref="name"/>
                                </p>
                                <p>
                                    <label>Password:</label>
                                    <input type="password" ref="pass"/>
                                </p>
                                <p>
                                    <input type="checkbox" ref="remember" /> 
                                    <label>Remember me</label>
                                </p>
                                <button type="submit" className="btn">Sign in</button> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}
module.exports = SignIn;