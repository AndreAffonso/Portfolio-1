import React from 'react';
import css from '../../styles/_projectElement.css';
import { Link } from 'react-router'

class ProjectElement extends React.Component{
  render() {
    return (
      <div className='projectElement' style={{backgroundImage: 'url(' + this.props.projectInfo.picture + ')'}}>
      	<Link to={this.props.projectInfo.route === 'chapulin-internship'
         ?`#` : `/project/${this.props.projectInfo.route}`}>
          <div className={this.props.projectInfo.route === 'chapulin-internship'
           ? 'projectSubtitleWrapper contentNotAvaiable' : 'projectSubtitleWrapper'}>
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
