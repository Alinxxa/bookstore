import React from 'react'
// import { Route } from 'react-router'
import { Link } from 'react-router-dom' 
//BrowserRouter as Router, Switch, Route,
export default function Header() {
  return (
    <><div class="header">
      <div class="logo">
        Booksy
      </div>
      <div class="nav">
        <Link to="/" class="link">Каталог</Link>
        <a href="#" class="link">Заказы</a>
        <a href="#" class="link">Корзина</a>
        <Link to="/SignIn" class="link">Войти</Link>
      </div>
      <div class="burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    {/* <Router>
        <Switch>
          <Route exact path='Header' Component={Header} />
          <Route exact path='/SignIn' Component={SignIn} />
        </Switch>
    </Router> */}
    </>
  )
}
