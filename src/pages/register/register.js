import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"
import FormRegister from "../../assents/formRegister";
import { Container, H1 } from "../../components/styledFormsLoginRegister";

export default function Register() {
  const navigate = useNavigate();

  const returnLogin = () => {
    navigate('/login')
  }

  return (
    <Container>
      <H1>Faça o seu Cadastro Agora! e Aproveite a UrOpine!</H1>
      <FormRegister/>
      <Button onClick={returnLogin}>Já possui Login? Faça Login!</Button>
    </Container>
  );
}