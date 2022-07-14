import React from "react";

const listItem = React.createClass({
  render: function () {
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    );
  },
});

module.exports = listItem;
