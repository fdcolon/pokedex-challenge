import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getPokemonData } from './../redux/actions'
import _ from 'lodash'

import FilterForm from './FilterForm'
import PokemonList from './PokemonList'

const Home = (props) => {
  const [filteredPokedex, setFilteredPokedex] = useState(props.pokedex)
  const [filteredBySearch, setFilteredBySearch] = useState(false)

  useEffect(() => {
    if (!props.pokedex) {
      props.getPokemonData()
    }
  }, [])

  useEffect(() => {
    setFilteredPokedex(props.pokedex)
  }, [props.pokedex])

  const handleOnSubmit = formValues => {
    const { search, types, weaknesses } = formValues

    if (!search) {
      setFilteredPokedex(props.pokedex)
      setFilteredBySearch(false)
    } else {
      const pokedexData = types || weaknesses ? filteredPokedex : props.pokedex
      const filteredData = pokedexData.filter(pokemon => pokemon.name.toLowerCase().startsWith(search.toLowerCase()))
      setFilteredPokedex(filteredData)
      setFilteredBySearch(true)
    }
  }

  const handleOnChange = formValues => {
    const { types, weaknesses } = formValues

    // Exit if there isn't any type or weakness selected.
    if (!types && !weaknesses) {
      return
    }

    // Clone the Pokedex info (original or filtered) for filtering purposes.
    let filteredData = filteredBySearch ? _.cloneDeep(filteredPokedex) : _.cloneDeep(props.pokedex)
    
    if (types) {
      // Create an array with the selected types and filter the Pokedex with those values.
      const selectedTypes = types.map(type => type.value)
      filteredData = filteredData.filter(pokemon => selectedTypes.every(type => pokemon.type.includes(type)))
    }

    if (weaknesses) {
      // Create an array with the selected weaknesses and filter the Pokedex with those values.
      const selectedWeaknesses = weaknesses.map(weakness => weakness.value)
      filteredData = filteredData.filter(pokemon => selectedWeaknesses.every(weakness => pokemon.weaknesses.includes(weakness)))
    }

    // Set the new value for the "filteredPokedex" state.
    setFilteredPokedex(filteredData)
  }

  if (!filteredPokedex) {
    return (
      <div className="loading">
        Loading...
      </div>
    )
  }

  return (
    <Fragment>
      <FilterForm
        types={ props.pokemonTypes }
        onSubmit={ handleOnSubmit }
        onChange={ handleOnChange }
      />
      <p className="description">Click on a Pokemon card to display its details! Have Fun =)</p>
      <PokemonList pokedex={ filteredPokedex } />
    </Fragment>  
  )
}

const mapStateToProps = state => {
  const { pokedex, pokemonTypes } = state.pokemonData
  return {
    pokedex,
    pokemonTypes
  }
}

export default connect(
  mapStateToProps,
  { getPokemonData }
)(Home)