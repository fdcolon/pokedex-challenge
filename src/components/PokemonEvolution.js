import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import history from './../helpers/history'

const PokemonEvolution = (props) => {
  console.log(props)
  const className = `thumbnail ${props.isNext || props.isPrev ? 'fade' : '' }`

  const handleGoToPath = () => {
    if (props.path) {
      history.push(props.path)
    }
  }

  return (
    <Fragment>
      { props.isNext && (
        <FontAwesomeIcon
          icon={ faChevronRight }
          size="lg"
          className="arrow"
        />
      ) }
      <img
        src={ props.img }
        alt={ props.name }
        title={ (props.isPrev || props.isNext) && `Click to view ${props.name} details` }
        className={ className }
        onClick={ handleGoToPath }
      />
      { props.isPrev && (
        <FontAwesomeIcon
          icon={ faChevronRight }
          size="lg"
          className="arrow"
        />
      ) }
    </Fragment>
  )
}

export default PokemonEvolution