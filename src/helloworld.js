//example 1
ReactDOM.render(
<h1>Hello World!</h1>,
document.getElementById("example")
);

//example 2
var HelloMessage = React.createClass({
  render: function() {
    return <div><h1>Hello {this.props.name}!</h1></div>;
  }
});

ReactDOM.render(
  <HelloMessage name="Deepak" />,
  document.getElementById("example1")
);

//example 3
