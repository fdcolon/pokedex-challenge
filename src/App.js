import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import PokemonDetails from './components/PokemonDetails'
import history from './helpers/history'
import './App.sass'

function App() {
  return (
    <Router history={ history }>
      <div className="pokedex">
        <h1>Pokedex</h1>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/:name" component={ PokemonDetails } />
        </Switch>
      </div>
    </Router>
  )
}

export default App
