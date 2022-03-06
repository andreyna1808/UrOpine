import React from "react";
import FormLogin from "../../assents/formLogin";
import { useNavigate } from "react-router-dom"
import CheckLogin from "../../assents/checkLogin";
import { Container, H1 } from "../../components/styledFormsLoginRegister";
import { Button } from "@mui/material";

export default function Login() {
  CheckLogin();
  const navigate = useNavigate();

  const registerPage = () => {
    navigate('/register')
  }

  return (
    <Container>
      <H1>Faça seu Login! </H1>
      <FormLogin/>
      <Button onClick={registerPage}>Não possui conta? Cadastre-se</Button>
    </Container>
  );
}