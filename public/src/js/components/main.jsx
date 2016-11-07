var React = require("react");
// var Header = require("./header.jsx");
// var Footer = require("./footer.jsx");

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<main>{this.props.children}</main>
			</div>	
		)
	}
});

module.exports = Main;