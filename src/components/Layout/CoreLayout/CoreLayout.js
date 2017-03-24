import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ProjecstGrid from '../../ProjectsGrid/ProjecstGrid';

class CoreLayout extends React.Component {
  render () {
    return (
      <div style={{background: '#fff0f0'}}>
        <Header />
          <div className='container'>
            {React.cloneElement(<ProjecstGrid />, this.props)}
          </div>
       </div>
    )
  }
} 

export default CoreLayout