import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div>Home</div>
          </Route>
          <Route path="/page1" exact>
            <div>Page 1</div>
          </Route>
          <Route path="/page2" exact>
            <div>Page 2</div>
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}
