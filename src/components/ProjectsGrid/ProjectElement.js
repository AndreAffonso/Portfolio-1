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
          	  <span>{this.props.projectInfo.name}</span>
            </div>
          </div>
        </Link>
      </div>
    )
  }
};

export default ProjectElement;
