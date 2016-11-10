var React = require("react");
var moment = require('moment');

var DayInput = React.createClass({
	getInitialState: function(){
		return{
			timeSheet: [{}]
		}
	},
	handleChange: function(e){
		console.log(e.target.value);
		this.state.timeSheet[e.target.name] = e.target.value;
	},
	render: function(){
		return (
			<tr>
		      <th scope="row">Mon</th>
		      <td><input name="Date" type="date" onChange={this.handleChange}></input></td>
		      <td><input name="timeIn" type="time" onChange={this.handleChange}></input></td>
		      <td><input name="timeOut" type="time" onChange={this.handleChange}></input></td>
		      <td><input name="lunchTime" type="time" onChange={this.handleChange}></input></td>
		    </tr>
		)
	}
});

module.exports = DayInput;