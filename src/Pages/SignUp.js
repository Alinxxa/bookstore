import React from 'react'
import { Link } from 'react-router-dom' 

export default function SignUp() {
  return (
<div  class="sign">
      <div class="registration-cssave">
    <form>
        {/* <h3 class="text-center">Войти</h3> */}
        <Link to="/SignUp" class="link">Регистрация</Link>
        <div class="form-group">
            <input class="form-control item" type="text" name="username" maxlength="15" minlength="4" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Логин" required/>
        </div>
        <div class="form-group">
        <input class="form-control item" type="email" name="email" id="email" placeholder="Email" required/>
        </div>
        <div class="form-group">
            <input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required/>
        </div>
        <div class="form-group">
            <input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль еще раз" required/>
        </div>
        <div class="form-group">
            <button class="btn btn-primary btn-block create-account" type="submit">Зарегистрироваться</button>
        </div>
        <Link to="/SignIn" class="linkk">Войти</Link>
    </form>
</div>
  </div>
  )
}
