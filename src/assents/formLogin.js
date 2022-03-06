import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import CheckLogin from "./checkLogin";
import { useNavigate } from "react-router-dom"
import { Login_url } from "../constants/urls";
import { Buttons, Container, Form, Input } from "../components/styledFormsLoginRegister";
import ToastAnimated, { showToast } from "../pages/ui-lib";

export default function FormLogin() {
	const navigate = useNavigate();

  CheckLogin();

  const [form, onChange ] = useForm({email:'', password: ''})

  const getIn = () => {

    axios.post(Login_url, form)
    .then((res) => {
      localStorage.setItem('tokenEddit', res.data.token);
      navigate('/posts')
    })
    .catch((err) => {
      showToast({ type: "error", message: "Email ou senha incorretos" });
    })
  }
  const keyPressEnter = (e) => {
    if(e.key === 'Enter' && form.name !== '' && form.email !== ''){
      getIn()
    }
  }

  return (
    <Container>
      <ToastAnimated/>
      <Form onSubmit={getIn}>
        <Input onKeyPress={keyPressEnter} required name="email" type={'email'} value={form.email} onChange={onChange} placeholder="Digite seu email"></Input>
        <Input onKeyPress={keyPressEnter} required name="password" type={'password'} value={form.password} onChange={onChange} placeholder="Digite sua senha"></Input>
      </Form>
      <Buttons onClick={getIn} type='submit' onKeyPress={keyPressEnter}>Fazer Login</Buttons>
    </Container>
  );
}