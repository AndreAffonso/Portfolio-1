import React from 'react'
import css from '../../../styles/_projectPage.css';

class Scoutfy extends React.Component {
  constructor (props, context) {
    super(props, context)
  }
  render () {
    return (
      <div>
        <img src={this.props.images[0]} className='largeProjectPicture marginTop30 centerProjectImage' />
        <h3>Summary</h3>
        <p className='text-normal justify-text marginBottom0'>Scoutfy is a brazilian
         startup founded by Adalberto Brandão, São Paulo. Scountfy's goal is to create
         a new enviroment for both atheletes and sport organizations, trying to provide
         them a place to manage 
         and organize their businesses.</p>
        <p className='text-normal justify-text'>Inside Scoutfy not only elite Atheletes
         but also regular costumers are able to keep track of their
         training results, health and physical situations, possible contracts with clubs
         and much more.</p>
        <div className='tecnologiesWrapper'>
          <div className='tecnologies'>
            <h3>Tecnologies</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Webpack</li>
            </ul>
          </div>
          <div className='tecnologies'>
            <h3>My Role</h3>
            <ul>
              <li>Frontend Developer</li>
              <li>Developing screens and React componentes used in the plataform</li>
            </ul>
          </div>
        </div>
        <img src={this.props.images[1]} className='largeProjectPicture marginBottom30' />
        <img src={this.props.images[2]} className='largeProjectPicture marginBottom30' />
        <h3>Conclusion</h3>
        <p className='text-normal justify-text marginBottom30'>Scoutfy is the startup 
        where I continuously improve my Frontend and coding knowledge. It also helps me improving time 
        management, since we are talking about a remote job and project management. Another cool part
        about this job is how involved and passionated I am towards it, making myself keep in touch with
        the new tecnologies and techniques.</p>
      </div>
    )
  }
}
export default Scoutfy
