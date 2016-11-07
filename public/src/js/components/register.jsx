var React = require("react");
var browserHistory = require("react-router").browserHistory;
var MainDispatcher = require("../dispatchers/mainDispatcher");
var MainConstant = require("../constants/mainConstant");
var UserStore = require("../stores/user");

var Register = React.createClass({
  getInitialState: function(){
    return {
      email: "",
      password: "",
      passwordConfirmation: "",
      type: ""
    }
  },
  handleChange: function(e){
    this.setState(
      (e.target.name === "email") ? {email: e.target.value} : (e.target.name === "password") ? {password: e.target.value} : {passwordConfirmation: e.target.value}
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    MainDispatcher.dispatch({
      action: MainConstant.USER.REGISTER,
      user: this.state
    });
  },
  render: function(){
    return (
      <div >
        <div>
          <div >
            <form onSubmit={this.handleSubmit}>
              <div >
                <div>
                  <span><i></i></span>
                </div>
                <div >
                  <input type="text" placeholder="email" name="email" onChange={this.handleChange}/>
                </div>
              </div>

              <div >
                <div >
                  <span><i ></i></span>
                </div>
                <div >
                  <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                </div>
              </div>


              <div >
                <div >
                  <span ><i ></i></span>
                </div>
                <div >
                  <input type="password" placeholder="confirm password" name="passwordConfirmation" onChange={this.handleChange}/>
                </div>
                <div >
                  <button type="submit">Register</button>
                  <p >Already a member? <a href="/login">Login here</a></p>  
                </div>
            </div>
            
            </form>
          </div>
        </div>
       </div>
    )
  }
});

module.exports = Register;
