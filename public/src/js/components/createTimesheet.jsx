var React = require("react");
var MainDispatcher = require("../dispatchers/mainDispatcher");
var MainConstant = require("../constants/mainConstant");
var TimesheetStore = require('../stores/timesheet.js');

var CreateTimesheet = React.createClass({
	getInitialState: function(){
		return{
			timesheet: {
				weekStart: "",
				weekEnd: "",
				approved: false,
				invoiced: false,
		    	day: [{
		      		date:       "",
		      		timeIn:     "",
		      		timeOut:    "",
		      		lunchTime:  ""
		    	}],
		    }
		}
	},
	handleSubmit: function(e){
		e.preventDefault();
		MainDispatcher.dispatch({
			action: MainConstant.TIMESHEET.CREATE,
			timesheet: this.state
		});
	},
	handleChange: function(e){
		console.log(this.state);
		this.state.timesheet[e.target.name] = e.target.value;
	},
	render: function(){
		return (
			<div>
				<h1>Create time sheet</h1>
				<form onSubmit={this.handleSubmit}>
					<table className="table table-bordered table-inverse">
					  <thead>
					    <tr>
					      <th>#</th>
					      <th>Week Start</th>
					      <th>Week End</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td></td>
					      <td><input name="weekStart" type="date" onChange={this.handleChange}></input></td>
					      <td><input name="weekEnd" type="Date" onChange={this.handleChange}></input></td>
					    </tr>
					  </tbody>
					</table>
					<button type="Submit">create</button>
				</form>
			</div>	
		)
	}
});

module.exports = CreateTimesheet;