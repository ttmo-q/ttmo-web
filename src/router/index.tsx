import React from 'react'
import Home from '@/views/Home'
import Lab from '@/views/Lab'
import { Route, Switch } from 'react-router-dom'

export default function RouterView() {
  return (
    <Switch>

      <Route path="/lab">
        <Lab />
      </Route>

      <Route path="/">
        <Home />
      </Route>

    </Switch>
  )
}
