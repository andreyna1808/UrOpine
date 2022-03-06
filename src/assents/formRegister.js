import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Register_url } from "../constants/urls";
import { Buttons, Container, Form, Input } from "../components/styledFormsLoginRegister";
import ToastAnimated, { showToast } from "../pages/ui-lib";

export default function FormRegister() {
  const navigate = useNavigate();

  const [ form, onChange ] = useForm({username: '', email:'', password: ''})
 
  const registerAccount = (e) => {    
    e.preventDefault()
    
    axios.post(Register_url, form)
    .then((res) => {
      localStorage.setItem('tokenEddit', res.data.token);
      showToast({ type: "success", message: "Cadastro realizado com sucesso! Bom proveito" });
      navigate('/')
    })
    .catch((err) => {
      showToast({ type: "error", message: "Infelizmente não foi possível realisar seu cadastro" });
    })
  }
  const keyPressEnter = (e) => {
    if(e.key === 'Enter' && form.name !== '' && form.email !== '' && form.username !== ''){
      registerAccount()
    }
  }

  return (
    <Container>
      <ToastAnimated/>
      <Form onSubmit={registerAccount}>
        <Input onKeyPress={keyPressEnter} required name="username" type={'text'} value={form.username} onChange={onChange} placeholder="Crie seu nome de usuário"></Input>
        <Input onKeyPress={keyPressEnter} required name="email" type={'email'} value={form.email} onChange={onChange} placeholder="Digite seu melhor email"></Input>
        <Input onKeyPress={keyPressEnter} required name="password" minLength={'8'} maxLength={'30'} type={'password'} value={form.password} onChange={onChange} placeholder="Crie sua senha"></Input>
        <p>Obs.: A senha deve conter mais de 8 dígitos</p>
      </Form>
      <Buttons onClick={registerAccount} type='submit' onKeyPress={keyPressEnter} >Fazer cadastro</Buttons>
    </Container>
  );
}