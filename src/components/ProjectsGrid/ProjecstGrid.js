import React from 'react';
import ProjectElement from './ProjectElement'
import '../../styles/_projectsGrid.css';

class ProjectsGrid extends React.Component{
  render() {
    return (
	    <div className='projectsGrid' id='projects'>
	      <h1 className='text-center' style={{width: '100%'}}>My Projects</h1>
	      {this.props.projects.map((project, i) => {
	      	return (<ProjectElement key={i} projectInfo={project} />)
	      })}
	    </div>
    )
  }
};

export default ProjectsGrid;
