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
         and organize their affair.</p>
        <p className='text-normal justify-text'>Inside Scoutfy not only elite Atheletes
         but also regular costumer are able to keep track of their
         traine results, health and physical situations, possible contracts with clubs
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
              <li>Developing screens and componentes used in the plataform</li>
              <li>Wrote API calls and other backend processes</li>
            </ul>
          </div>
        </div>
        <img src={this.props.images[1]} className='largeProjectPicture marginBottom30' />
        <img src={this.props.images[2]} className='largeProjectPicture marginBottom30' />
        <h3>Conclusion</h3>
        <p className='text-normal justify-text marginBottom30'>The Arcanjo site is a culmination
         of my skills, taking designs and converting them into a responsive layout and combining 
         both a web plataform with mobile apps. It was also a project that I worked as a Full Stack,
         being part of both frontend (Mobile App, Web Dashboard) and backend (MySQL, Node.js)</p>
      </div>
    )
  }
}
export default Scoutfy
