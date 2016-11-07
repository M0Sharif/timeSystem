var React = require("react");

var MainDispatcher = require("../dispatchers/mainDispatcher");
var MainConstant = require("../constants/mainConstant");
var UserStore = require("../stores/user");

var Login = React.createClass({
  componentDidMount: function(){
    UserStore.on(MainConstant.USER.ERROR.LOGIN, this.handleError);
  },
  getInitialState: function(){
    return {
      email: "",
      password: "",
      error: false
    }
  },
  handleChange: function(e){
    this.setState(
      (e.target.name === "email") ? {email: e.target.value} : {password: e.target.value}
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    MainDispatcher.dispatch({
      action: MainConstant.USER.LOGIN,
      user: {email: this.state.email, password: this.state.password}
    });
  },
  handleError: function(){
    this.setState({
      error: UserStore.getError().message
    });
  },
  render: function(){
    return (
      <div>
       <div>
          <div >
            <form onSubmit={this.handleSubmit}>
              <div >
                <div >
                  <span prefix><i></i></span>
                </div>
                <div >
                  <input type="text" placeholder="email" name="email" onChange={this.handleChange}/>
                </div>
              </div>
              <div >
                <div >
                  <span prefix><i></i></span>
                </div>
                <div >
                  <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                </div>
                <div >
                  <button type="submit">Login</button>
                  <p>Don't have an account? <a href="/register">Rigister here</a></p>  
                </div>
              </div>
            </form>
              {
                (this.state.error) ? (<div>{this.state.error}</div>) : ""
              }
          </div>
        </div>
       </div>
      
    )
  }
});

module.exports = Login;
