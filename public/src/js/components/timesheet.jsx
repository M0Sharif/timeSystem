var React = require("react");
// var Header = require("./header.jsx");
// var Footer = require("./footer.jsx");
var ReactBsTable = require("react-bootstrap-table");
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var TimePicker = require('rc-time-picker');

var week = [
  {
      id: 1,
      name: "timeIn"

  },{
      id: 2,
      name: "timeOut"
  }
];

var Timesheet = React.createClass({
	handleSubmit: function(){
		console.log("submitted!!");
	},
	handleTime: function(){
		<TimePicker
    		style={{ width: 100 }}
    		defaultValue={moment()}
  		/>
	},
	render: function(){
		return (
			<div className="timesheetEntery">
				 <BootstrapTable className="tableData" data={week} striped={true} hover={true}>
				  	  <TableHeaderColumn isKey={true} dataField="name"></TableHeaderColumn>
				 	  <TableHeaderColumn dataField={this.handleTime}>Mon</TableHeaderColumn>
				      <TableHeaderColumn dataField="day">Tue</TableHeaderColumn>
				      <TableHeaderColumn dataField="price">Wed</TableHeaderColumn>
				      <TableHeaderColumn dataField="price">Thu</TableHeaderColumn>
				      <TableHeaderColumn dataField="price">Fri</TableHeaderColumn>
				      <TableHeaderColumn dataField="price">Sat</TableHeaderColumn>
				      <TableHeaderColumn dataField="price">Sun</TableHeaderColumn>
				  </BootstrapTable>
				  <button onClick={this.handleSubmit}>save</button>
			</div>	
		)
	}
});

 // <TableHeaderColumn isKey={true} dataField="id">Mon</TableHeaderColumn>

module.exports = Timesheet;