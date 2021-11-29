import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, FormLabel } from 'react-bootstrap';
import { Form } from '@unform/web';
import * as Yup from "yup";

import Btn from '../../components/btn';
import { Input } from '../../components/input';

export default function FormLogin() {
  const formRef = useRef(null);
  let history = useHistory();

  async function handleSubmit(values) {
    console.log(values)

    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido.")
          .required("E-mail é obrigatório."),
        password: Yup.string()
          .min(6, "Senha de mínimo de 6 caracteres.")
          .required("Senha é obrigatória."),
      });

      await schema.validate(values, {
        abortEarly: false,
      });

      history.push("/");

    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        // setLoading(false);
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
  
  return (
    <Form ref={formRef} className="mt-4"  onSubmit={handleSubmit}>

        <FormGroup className="form-group">
          <FormLabel>E-mail</FormLabel>
          <Input
            name="email"
            type="text"
            placeholder="Digite seu e-mail"
          />
        </FormGroup>
        <FormGroup className="form-group">
          <FormLabel>Senha</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Digite seu e-mail"
          />
        </FormGroup>

        <Btn
            title="Entrar"
        />
    </Form>
  )
}