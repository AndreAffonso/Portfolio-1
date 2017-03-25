import React from 'react';
import Scoutfy from './Scoutfy/Scoutfy'
import Arcanjo from './Arcanjo/Arcanjo'
import Arkanoid from './Arkanoid/Arkanoid'
import Header from './Header'
import css from '../../styles/_projectsGrid.css'

class ProjectsGrid extends React.Component{
  constructor(props, context) {
  	super(props, context)
    let projects = props.projects
    let projectInfo
    for(let key in projects) {
    	if (projects[key].route === this.props.params.projectId) {
    		projectInfo = projects[key]
    	}
    }
    this.state = {
      projectInfo: projectInfo
    }
  }
  render() {
    let child
    switch(this.props.params.projectId) {
      case 'scoutfy':
        child = React.cloneElement(<Scoutfy />, this.state.projectInfo)
        break;
      case 'arcanjo':
        child = React.cloneElement(<Arcanjo />, this.state.projectInfo)
  	    break;
      case 'arkanoid':
        child = React.cloneElement(<Arkanoid />, this.state.projectInfo)
  	    break;
      default:
        break;
    }
    return (
      <div style={{background: '#ffffff'}}>
        <Header projectName={this.state.projectInfo.name} />
        <div className='projectContainer'>
          {child}
        </div>
      </div>
    )
  }
};

export default ProjectsGrid;
