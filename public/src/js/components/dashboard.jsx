var React = require("react");
var ReactBsTable = require("react-bootstrap-table");
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var UserStore = require('../stores/user.js');
var TimesheetStore = require('../stores/timesheet.js');
var MainDispatcher = require("../dispatchers/mainDispatcher");
var MainConstant = require("../constants/mainConstant");

var Dashboard = React.createClass({
	getInitialState: function(){
		return{
			timesheet: {},
			user: UserStore.getUser()
		}
	},
	componentWillMount: function(){
		// console.log(this.state.user)
		this.getTimesheets(this.state.user_id);
	},
	getTimesheets: function(){
		MainDispatcher.dispatch({
			action: MainConstant.TIMESHEET.GET,
			id: this.state.user._id
		});
	},
	render: function(){
		return (
			<div>
				<table className="table table-bordered table-inverse">
				  <thead>
				    <tr>
				      <th>#</th>
				      <th>Time Sheet id</th>
				      <th>Approved</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td></td>
				      <td><label name="id"></label></td>
				      <td><label name="Approved"></label></td>
				    </tr>
				    <tr>
				    	<td>
				    	</td>
				    	<td>
				    		<button>edit</button>
				    		<button>delete</button>
				    	</td>
				    </tr>
				  </tbody>
				</table>
			</div>	
		)
	}
});

module.exports = Dashboard;