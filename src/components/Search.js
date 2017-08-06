// Include React
var React = require("react");
var Saved = require("./Saved");
// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Search = React.createClass({
    render: function () {
        return (<div>
            <h1 > I'm the Search Component!! </h1>

            <Saved />
        </div>
        );
    }
});

{/* Export the component back for use in other files */ }
module.exports = Search;