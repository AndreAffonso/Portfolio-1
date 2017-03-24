import React from 'react';
import Footer from './Layout/Footer'
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    console.log(this.props)
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    )
  }
});

export default Main;
