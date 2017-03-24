import React from 'react';
import css from '../../styles/_projectElement.css';
import { Link } from 'react-router'

class ProjectElement extends React.Component{
  render() {
    console.log(`/view/${this.props.projectInfo.route}`)
    return (
      <div className='projectElement' style={{backgroundImage: 'url(' + this.props.projectInfo.picture + ')'}}>
      	<Link to={`/project/${this.props.projectInfo.route}`}>
          <div className='projectSubtitleWrapper'>
            <div className='projectSubtitle'>
          	  <p>{this.props.projectInfo.name}</p>
    	  	    <div className='subtitleProjectInfoIcons'>
    	  	  	  <a><i className="fa fa-heart" aria-hidden="true"></i></a>
    	  		    <a><i className="fa fa-comment" aria-hidden="true"></i></a>
    	          <a><i className="fa fa-github" aria-hidden="true"></i></a>
    	  	    </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
};

export default ProjectElement;
