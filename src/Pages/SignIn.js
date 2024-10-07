import React from 'react'
import { Link } from 'react-router-dom' 

export default function SignIn() {
  return (
    <div  class="sign">
      <div class="registration-cssave">
    <form>
        {/* <h3 class="text-center">Войти</h3> */}
        <Link to="/SignIn" class="link">Войти</Link>
        <div class="form-group">
        <input class="form-control item" type="email" name="email" id="email" placeholder="Email" required/>
        </div>
        <div class="form-group">
            <input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required/>
        </div>
        <div class="form-group">
            <button class="btn btn-primary btn-block create-account" type="submit">Вход в аккаунт</button>
        </div>
        <Link to="/SignUp" class="linkk">Регистрация</Link>
    </form>
</div>
  </div>
  )
}
