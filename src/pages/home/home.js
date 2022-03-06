import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from '../../constants/imgs/nomeLogo.png'
import { Buttons, ButtonsCadastro, ButtonsLogin, Container, ContainerButtons, FundoBalao, H1, H1Autor, H1Lateral, Paragrafo, TamanhoDivImg, TamanhoImg } from "./styledHome";

export default function Home() {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login') 
  }
  const register = () => {
    navigate('/register') 
  }

  return (
    <Container>
      <TamanhoDivImg>
        <TamanhoImg src={Banner}></TamanhoImg>
        <H1>Mostre ao mundo as suas ideias!</H1>
        <FundoBalao>
          <Paragrafo>+ Entre para a comunidade da Labenu</Paragrafo>
          <Paragrafo>+ Conheça pessoas e redija texto cativantes</Paragrafo>
          <Paragrafo>+ Adquira conhecimento e interaja</Paragrafo>
          <Paragrafo>+ Conquiste o seu publico e outras turmas</Paragrafo>
          <Paragrafo>+ Tenha visibilizade</Paragrafo>
        </FundoBalao>
      </TamanhoDivImg>
      <div>
        <H1Lateral>"Eu... livros! E inteligência! Há coisas mais importantes como amizade e bravura"</H1Lateral> <H1Autor> Hermione Granger - Harry Potter</H1Autor>
        <ContainerButtons>
          <h1>VAMOS NESSA?</h1>
          <ButtonsLogin onClick={login}>Entrar</ButtonsLogin>
          <ButtonsCadastro onClick={register}>Registrar-se</ButtonsCadastro>
        </ContainerButtons>
      </div>
    </Container>
  );
}