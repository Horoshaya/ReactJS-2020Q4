import React from "react";

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return <h1>{title}</h1>;
  }
}
