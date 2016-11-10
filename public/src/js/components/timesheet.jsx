var React = require("react");
// var Header = require("./header.jsx");
// var Footer = require("./footer.jsx");
var ReactBsTable = require("react-bootstrap-table");
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var moment = require('moment')
var MainDispatcher = require("../dispatchers/mainDispatcher");
var MainConstant = require("../constants/mainConstant");
var TimesheetStore = require('../stores/timesheet.js');
var totalDay;

var DateTimePicker = require('react-widgets').DateTimePicker

var Timesheet = React.createClass({
	getInitialState: function(){
		return{
			timeSheet: [{}]
		}
	},
	handleSubmit: function(e){
		console.log(this.state)
		// console.log("submitted!!" + JSON.stringify(this.state));
		e.preventDefault();
		MainDispatcher.dispatch({
			action: MainConstant.TIMESHEET.UPDATE,
			timeSheet: this.state.timeSheet
		});
	},
	handleChange: function(e){
		console.log(e.target.value);
		this.state.timeSheet[e.target.name] = e.target.value;
		// this.state.timeSheet.total = this.calculateTotal()
	},
	calculateTotal: function(e){
		console.log(this.state.timeSheet);
		var timeIn = this.state.timeSheet.timeIn;
		var timeOut = this.state.timeSheet.timeOut;

		totalDay = parseFloat(moment.utc(moment(timeOut,"HH:mm:ss").diff(moment(timeIn,"HH:mm:ss"))).format("HH:mm:ss"));
		return totalDay;
	},
	render: function(){
		return (
			<div className="timesheetEntery">
				<h1>Contractor time sheet</h1>
				<table className="table table-bordered table-inverse">
				  <thead>
				    <tr>
				      <th>#</th>
				      <th>Date</th>
				      <th>Time In</th>
				      <th>Time out</th>
				      <th>Lunch Time</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">Mon</th>
				      <td><input name="Date" type="date" onChange={this.handleChange}></input></td>
				      <td><input name="timeIn" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="timeOut" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="lunchTime" type="time" onChange={this.handleChange}></input></td>
				    </tr>
				    <tr>
				      <th scope="row">Tue</th>
				      <td><input name="Date" type="date" onChange={this.handleChange}></input></td>
				   	  <td><input name="timeIn" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="timeOut" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="lunchTime" type="time" onChange={this.handleChange}></input></td>
				    </tr>
				    <tr>
				      <th scope="row">Wed</th>
				      <td><input type="date"></input></td>
				      <td><input name="timeIn" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="timeOut" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="lunchTime" type="time" onChange={this.handleChange}></input></td>
				    </tr>
				    <tr>
				      <th scope="row">Thu</th>
				      <td><input type="date"></input></td>
				      <td><input name="timeIn" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="timeOut" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="lunchTime" type="time" onChange={this.handleChange}></input></td>
				    </tr>
				    <tr>
				      <th scope="row">Fri</th>
				      <td><input type="date"></input></td>
				      <td><input name="timeIn" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="timeOut" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="lunchTime" type="time" onChange={this.handleChange}></input></td>
				    </tr>
				    <tr>
				      <th scope="row">Sat</th>
				      <td><input type="date"></input></td>
				      <td><input name="timeIn" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="timeOut" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="lunchTime" type="time" onChange={this.handleChange}></input></td>
				    </tr>
				    <tr>
				      <th scope="row">Sun</th>
				      <td><input type="date"></input></td>
				      <td><input name="timeIn" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="timeOut" type="time" onChange={this.handleChange}></input></td>
				      <td><input name="lunchTime" type="time" onChange={this.handleChange}></input></td>
				    </tr>
				    <tr>
					  <th colSpan="1" scope="row">Total</th>
				      <td><label>{this.state.timeSheet.total}</label></td>
				    </tr>
				  </tbody>
				</table>
				<button onClick={this.handleSubmit}>save</button>
			</div>	
		)
	}
});
	
	//<BootstrapTable className="tableData" data={week} striped={true} hover={true}>
	//			  	  <TableHeaderColumn isKey={true} dataField="name"></TableHeaderColumn>
	//			  </BootstrapTable>

	//<TableHeaderColumn dataField={TimePicked}>Mon</TableHeaderColumn>
	//			      <TableHeaderColumn dataField="day">Tue</TableHeaderColumn>
	//			      <TableHeaderColumn dataField="price">Wed</TableHeaderColumn>
	//			      <TableHeaderColumn dataField="price">Thu</TableHeaderColumn>
	//			      <TableHeaderColumn dataField="price">Fri</TableHeaderColumn>
	//			      <TableHeaderColumn dataField="price">Sat</TableHeaderColumn>
	//			      <TableHeaderColumn dataField="price">Sun</TableHeaderColumn>

 // <TableHeaderColumn isKey={true} dataField="id">Mon</TableHeaderColumn>

module.exports = Timesheet;