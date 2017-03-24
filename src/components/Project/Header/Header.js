import React from 'react';
import '../../../styles/_projectHeader.css';
import { Link } from 'react-router'

class Header extends React.Component{
  render() {
    return (
      <div className='projectHeader'>
        <h1>{this.props.projectName}</h1>
        <div className='backgroundImage'>
          <div>
            <div className='leftItems'>
              <a><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href='https://github.com/brunobraga95' target='_blank'>
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href='https://www.linkedin.com/in/brunobraga95/' target='_blank'>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <div className='rightItems'>
              <Link to='/'>Home</Link>
              <a>Resume</a>
            </div>
            <div className='roundyPicture myPictureWrapper'>
              <div className='roundyPicture myPicture' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
