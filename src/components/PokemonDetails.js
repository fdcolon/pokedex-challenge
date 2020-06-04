import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getPokemonData } from './../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

import history from './../helpers/history'
import PokemonEvolution from './PokemonEvolution'

const PokemonDetails = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState(null)
  const [disabledLeftButton, setDisabledLeftButton] = useState(true)
  const [disabledRightButton, setDisabledRightButton] = useState(true)
  const [prevEvolution, setPrevEvolution] = useState([])
  const [nextEvolution, setNextEvolution] = useState([])
  const lastId = props.pokedex ? props.pokedex[props.pokedex.length - 1].id : 0

  useEffect(() => {
    if (!props.pokedex) {
      props.getPokemonData()
    }
  }, [])

  useEffect(() => {
    if (props.pokedex) {
      const pokemonName = props.match.params.name
      const pokemonInfo = props.pokedex.find(pokemon => _.kebabCase(pokemon.name) === pokemonName)
      
      if (pokemonInfo) {
        console.log(pokemonInfo)
        if (pokemonInfo.id > 1) {
          setDisabledLeftButton(false)
        } else {
          setDisabledLeftButton(true)
        }

        if (pokemonInfo.id < lastId) {
          setDisabledRightButton(false)
        } else {
          setDisabledRightButton(true)
        }

        setPokemonDetails(pokemonInfo)

        if (pokemonInfo.prev_evolution) {
          const prevEvolutions = pokemonInfo.prev_evolution.map(prevPokemon => {
            const data = props.pokedex.find(pokemon => pokemon.num === prevPokemon.num)
            const { id, num, name, img } = data
            return {
              id,
              num,
              name,
              path: _.kebabCase(data.name),
              img
            }
          })

          setPrevEvolution(prevEvolutions)
        } else {
          setPrevEvolution([])
        }

        if (pokemonInfo.next_evolution) {
          const nextEvolutions = pokemonInfo.next_evolution.map(nextPokemon => {
            const data = props.pokedex.find(pokemon => pokemon.num === nextPokemon.num)
            const { id, num, name, img } = data
            return {
              id,
              num,
              name,
              path: _.kebabCase(data.name),
              img
            }
          })

          setNextEvolution(nextEvolutions)
        } else {
          setNextEvolution([])
        }
      } else {
        setPokemonDetails({})
      }
    }
  }, [props.pokedex, props.match.params.name])

  const handleGoPrevious = () => {
    const previousId = pokemonDetails.id - 1

    if (previousId > 0) {
      const previousData = props.pokedex.find(pokemon => pokemon.id === previousId)
      history.push(`/${_.kebabCase(previousData.name)}`)
    }
  }

  const handleGoNext = () => {
    const nextId = pokemonDetails.id + 1

    if (nextId <= lastId) {
      const nextData = props.pokedex.find(pokemon => pokemon.id === nextId)
      history.push(`/${_.kebabCase(nextData.name)}`)
    }
  }

  const handleGoHome = () => {
    history.push('/')
  }

  const renderContent = () => {
    if (!props.pokedex || !pokemonDetails) {
      return (
        <div className="loading">
          Loading...
        </div>
      )
    } else if (props.pokedex && _.isEmpty(pokemonDetails)) {
      return (
        <p>No Pokemon matches with the name <b>{ _.startCase(props.match.params.name) }</b></p>
      )
    }

    return (
      <Fragment>
        <div className="main-container">
          <div className="photo-container">
            <img src={ pokemonDetails.img } className="photo" />
          </div>
          <div className="data">
            <div className="name">
              <p>{ pokemonDetails.num } - { pokemonDetails.name }</p>
            </div>
            <div className="type">
              <p><b>Type:</b></p>
              <div className="icons-block">
                { pokemonDetails.type.map((type, index) => (
                  <img
                    key={ `${type}-${index}` }
                    src={ `${process.env.PUBLIC_URL}${type}.png` }
                    alt={ type }
                    title={ type }
                    className="icon"
                  />
                )) }
              </div>
            </div>
            <div className="weaknesses">
              <p><b>Weaknesses:</b></p>
              <div className="icons-block">
                { pokemonDetails.weaknesses.map(weakness => (
                  <img
                    key={ weakness }
                    src={ `${process.env.PUBLIC_URL}${weakness}.png` }
                    alt={ weakness }
                    title={ weakness }
                    className="icon"
                  />
                )) }
              </div>
            </div>
            <div className="height-weight">
              <p>
                <b>Height:</b> { pokemonDetails.height }
              </p>
              <p>
                <b>Weight:</b> { pokemonDetails.weight }
              </p>
            </div>
          </div>
        </div>
        { (prevEvolution.length > 0 || nextEvolution.length > 0) && (
          <div className="evolutions">
            { prevEvolution.length > 0 && prevEvolution.map(pokemon => (
              <PokemonEvolution
                key={ pokemon.id }
                num={ pokemon.num }
                name={ pokemon.name }
                path={ pokemon.path }
                img={ pokemon.img }
                isPrev={ true }
              />
            )) }
            <PokemonEvolution
              num={ pokemonDetails.num }
              name={ pokemonDetails.name }
              img={ pokemonDetails.img }
            />
            { nextEvolution.length > 0 && nextEvolution.map(pokemon => (
              <PokemonEvolution
                key={ pokemon.id }
                num={ pokemon.num }
                name={ pokemon.name }
                path={ pokemon.path }
                img={ pokemon.img }
                isNext={ true }
              />
            )) }
          </div>
        ) }
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div className="pokemon-details">
        { renderContent() }
      </div>
      <div className="navigator">
        <button
          type="button"
          className="nav-button"
          disabled={ disabledLeftButton }
          onClick={ handleGoPrevious }
          title={ !disabledLeftButton && `Click to view previous Pokemon` }
        >
          <FontAwesomeIcon
            icon={ faArrowAltCircleLeft }
            size="3x"
            className="nav-icon"
          />
        </button>
        <button
          type="button"
          className="nav-button"
          onClick={ handleGoHome }
          title="Click to go back to list"
        >
          <FontAwesomeIcon
            icon={ faHome }
            size="3x"
            className="nav-icon"
          />
        </button>
        <button
          type="button"
          className="nav-button"
          disabled={ disabledRightButton }
          onClick={ handleGoNext }
          title={ !disabledRightButton && `Click to view next Pokemon` }
        >
          <FontAwesomeIcon
            icon={ faArrowAltCircleRight }
            size="3x"
            className="nav-icon"
          />
        </button>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  const { pokedex } = state.pokemonData
  return {
    pokedex
  }
}

export default connect(
  mapStateToProps,
  { getPokemonData }
)(PokemonDetails)