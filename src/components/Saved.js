// Include React
var React = require("react");

// Create the Search component
// Notice how Search uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Saved = React.createClass({
    render: function () {
        return (<div>
            <h1 > I 'm the Saved Component!!</h1>
            <Results />
        </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Saved;