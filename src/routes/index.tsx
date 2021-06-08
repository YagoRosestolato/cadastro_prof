import React from 'react'
import { Switch, Route } from 'react-router-dom'

// rotas
// / dashboard - listar os professores
// /new - novo cadastro
// /details - detalhes do professor

import Dashboard from '../pages/Dashboard'
import New from '../pages/New'
import Details from '../pages/Details'

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/new' component={New} />
    <Route path='/details/:professor' component={Details} />
  </Switch>
)

export default Routes
