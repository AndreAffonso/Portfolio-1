import React from 'react';
import headerStyles from '../../../styles/_header.css';

class Header extends React.Component{
  render() {
    return (
      <div className='header'>
        <div className='leftItems'>
          <a href='https://github.com/brunobraga95' target='_blank'><i className="fa fa-github" aria-hidden="true"></i></a>
          <a href='https://www.linkedin.com/in/brunobraga95/' target='_blank'>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div className='rightItems'>
          <a href='#projects'>Projects</a>
          <a href='https://drive.google.com/open?id=0Bwtm0xUlN2eQVkg5OUdFby1lTms' target='_blank'>Resume</a>
        </div>
        <div className='desktopHeader'>
          <div className='backgroundImage'>
          	<div className='itemsWrapper container'>
              <div className='roundyPicture myPictureWrapper'>
                <div className='roundyPicture myPicture' />
              </div>
            </div>
          </div>
        </div>
        {/*Mobile Layout starts here */}
        <div className='mobileHeader'>
        	<div className='myInfoCenter'>
            <div className='myName'>
  	    		 <h5>Bruno Braga</h5>
            </div>
            <div className='roundyPicture myPictureWrapper'>
              <div className='roundyPicture myPicture' />
            </div>
          	<div className='mySkills'>
       				<ul>
       					<li>HTML</li>
       					<li>CSS</li>
       					<li>JavaScript</li>
       					<li>React</li>
       					<li>Redux</li>
       					<li>Mysql</li>
       				</ul>
       			</div>
  	    	</div>
  	    </div>
        <div className='container marginTop30'>
          <h2>Bruno Braga!</h2>
          <p>I am a Computer Engineering Student, 4th year. Currently at the University of Notre Dame for an exchange program, originally from the Univerisity of Itajubá, Brazil. Involved in many activities such as programming competitions, research groups and tutoring. Experience in App development(Android), digital filters, algorithms and Data Structure. Interests are focused on Software development, especially software engineering, big projects and algorithms. I also have a huge passion when it comes entrepreneurship and Technology startups.
            I look for a company where I will grown professionally and socially, not just a place to do to my job and go home, but a place where I can learn and also share knowledge. Being able to impact people life and see through my job the world being chapped in a better and more connected place is my main goal, not just professionally but also in life.</p>
        </div>
      </div>
    )
  }
}

export default Header;
