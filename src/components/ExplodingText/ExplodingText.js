import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './exploding-text.module.scss'

const speeds = {
  fast: 20,
  medium: 10,
  slow: 4,
}

const randomNumber = (lower, upper) =>
  lower + Math.floor(Math.random() * (upper - lower + 1))

const ExplodingText = ({ children, initExploded, height, speed }) => {
  const [hasExploded, setHasExploded] = useState(initExploded)

  const letters = children.split('')

  const randomPosition = size => {
    const lower = size * -0.5
    const upper = size * 1.5
    return randomNumber(lower, upper)
  }

  const handleMouseEnter = () => {
    if (hasExploded === initExploded) {
      setHasExploded(!initExploded)
    }
  }

  const handleMouseLeave = () => {
    if (hasExploded !== initExploded) {
      setHasExploded(initExploded)
    }
  }

  return (
    <div
      key={children}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.container}
      style={{
        height: `${height}em`,
        width: `${letters.length}ch`,
      }}
    >
      {letters.map((letter, index) => {
        const style = {
          left: `${index}ch`,
          transition: `all ${(index + 1) / speeds[speed]}s linear`,
        }

        if (hasExploded) {
          style.left = `${randomPosition(letters.length)}ch`
          style.top = `${randomPosition(height)}em`
        }

        return (
          <span key={index} style={style}>
            {letter}
          </span>
        )
      })}
    </div>
  )
}

ExplodingText.propTypes = {
  children: PropTypes.string.isRequired,
  initExploded: PropTypes.bool,
  height: PropTypes.number,
  speed: PropTypes.oneOf(['fast', 'medium', 'slow']),
}

ExplodingText.defaultProps = {
  initExploded: false,
  height: 1,
  speed: 'medium',
}

export default ExplodingText
