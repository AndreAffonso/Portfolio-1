import React from 'react'
import css from '../../../styles/_projectPage.css';

class Arkanoid extends React.Component {
  constructor (props, context) {
    super(props, context)
  }
  render () {
    return (
      <div>
        <img src={this.props.images[0]} style={{marginTop: '30px'}}
          className='mediumProjectPicture centerProjectImage marginTop30 ' />
        <h3>Summary</h3>
        <p className='text-normal justify-text marginBottom0'>
          <a href='https://github.com/brunobraga95/Arkanoid-PvP' target='_blank'>Arkanoid-PVP</a> is a Android App game that I developed during one of of my Sophomore year.
          It was just a personal project that I decided to work on in order to keep myself busy 
          and also learn something new during the break time.</p>
        <p className='text-normal justify-text'>It is a simple Single/Two Player game
        where the player who misses the ball loses. The Two players mode works by bluetooth
        and the game was developed using Canvas Library.</p>
        <div className='tecnologiesWrapper'>
          <div className='tecnologies'>
            <h3>Tecnologies</h3>
            <ul>
              <li>Java</li>
              <li>Android Studio</li>
              <li>Canvas</li>
            </ul>
          </div>
        </div>
        <img src={this.props.images[1]} className='mediumProjectPicture marginBottom30 centerProjectImage' />
        <h3>Conclusion</h3>
        <p className='text-normal justify-text marginBottom30'>The Arkanoid game was my first 
        personal project. Because of that it played an important role on making me enjoy Computer Science.
        It was also very helpfull at improving my OOP and Java knowledge.   
        </p>
      </div>
    )
  }
}
export default Arkanoid
