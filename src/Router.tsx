import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Flex } from './styles'

import Landing from './pages/Landing'
import Home from './pages/Home'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={Home} />
        <Route path="/">
          <Flex className="full">
            <h1>Erro 404</h1>
            <h3>Não Encontrado!</h3>
          </Flex>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
