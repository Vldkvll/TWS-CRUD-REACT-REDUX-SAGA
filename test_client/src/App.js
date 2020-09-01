import React from 'react'
import {Redirect, Route,} from "react-router-dom";
import Navbar from './component/navbar/navbar'
import User from './component/viewUser/viewUser'
import { Add } from './component/add/Add'

const App = () => {
  return (
    <>
      <Navbar />
        <Redirect from="/" to="/users" />
        <Route path="/users" render={() => (<User/>)}/>
        <Route path="/add" component={Add}/>
      </>
  )
}

export { App }
