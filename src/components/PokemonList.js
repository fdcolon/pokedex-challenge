import React, { Component } from 'react'
import _ from 'lodash'

import history from './../helpers/history'

class PokemonList extends Component {
  handleViewDetails(name) {
    // const path = name.toLowerCase().replace(' ', '-')
    const path = _.kebabCase(name)
    history.push(`/${path}`)
  }

  render() {
    return (
      <div className="list">
        { this.props.pokedex.map(pokemon => (
          <div
            key={ pokemon.id }
            className="row"
            onClick={ () => this.handleViewDetails(pokemon.name) }
          >
            <div className="pokemon">
              <div className="photo-container">
                <img src={ pokemon.img } className="photo" />
              </div>
              <div className="data">
                <div className="name">
                  <p>{ pokemon.num } - { pokemon.name }</p>
                </div>
                <div className="type">
                  <p><b>Type:</b></p>
                  <div>
                    { pokemon.type.map((type, index) => (
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
                  <div>
                    { pokemon.weaknesses.map(weakness => (
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
              </div>
            </div>
          </div>
        )) }
      </div>
    )
  }
}

export default PokemonList