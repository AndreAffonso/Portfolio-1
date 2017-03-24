import React from 'react'
import headerStyles from '../../../styles/_footer.css'
import { Link } from 'react-router'

class Header extends React.Component{
  render() {
    return (
      <div className='footer'>
        <div className='topBlue' />
        <div className='socialLinks'>
          <a href='https://github.com/brunobraga95' target='_blank'><i className="fa fa-github" aria-hidden="true"></i></a>
          <a href='https://www.linkedin.com/in/brunobraga95/' target='_blank'>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div className='otherLinks'>
          <a  href="mailto:brunobraga95@gmail.com">brunobraga95@gmail.com</a>
          <a href='http://www.unifei.edu.br/' target='_blank'>Universidade Federal de itajubá</a>
        </div>

      </div>
    )
  }
}

export default Header;
