import React from "react";
import { BoxLogin } from '../components/boxlogin';
import { Link } from 'react-router-dom';

import FormLogin from '../components/login/FormLogin';

import './Login.css'

function Login() {
  return (
    <main className="main__login">
      <BoxLogin
          title="Acessar Conta"
      >
          <FormLogin/>
          <Link to="/forgot-password">
              <p className="text-center link">
                  Esqueci minha senha
              </p>
          </Link>
      </BoxLogin>    
    </main>
  );
};

export default Login;