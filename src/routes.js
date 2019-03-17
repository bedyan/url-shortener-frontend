import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import Statistics from './components/Statistics'
import Redirect from './components/Redirect'

const Routes = () =>{
  return(
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/stats" component={Statistics}/>
      <Route path="/" component={Redirect}/>
    </Switch>
  )
}

export default Routes;
