import React from "react";

export default class Subtitle extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return <h2>{title}</h2>;
  }
}
