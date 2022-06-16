import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'O',
    'S',
    'M',
    'O',
    'S',
    ' ',
  ]
  const secondNameArray = [
    'H',
    'Y',
    'D',
    'R',
    'A',
    'U',
    'L',
    'I',
    'C',
    'S',
  
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1000)
  })

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          {/* <img src={LogoTitle} alt="developer" /> */}

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={20}
          />
          <br/>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={secondNameArray}
            idx={20}
          />
        </h1>
        <h2> High Technology Hydraulic Solutions For Your Company</h2>
        <Link to="/contact" className="flat-button">
          CONTACT US
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
