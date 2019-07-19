import React, { useState } from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }

  render() {
    const about = this;
    document.addEventListener('changeval', ({ detail }) => {
      about.setState({
        val: detail >= 0 || !!detail ? detail:0,
      })
    });
    return <h2>{this.state.val}</h2>
  }
}

export default About;
