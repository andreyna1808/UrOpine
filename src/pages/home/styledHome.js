import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5% 0;
  @media (max-width: 700px) {
		flex-direction: column;
	}
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17%;
  align-items: center;
`

export const TamanhoDivImg = styled.div`
  margin: 2% 5%;
  @media (max-width: 700px) {
		margin: 3% 0;
    text-align: center;
	}
`

export const TamanhoImg = styled.img`
  width: 50%;
  @media (max-width: 700px) {
		width: 85%;
	}
`

export const H1 = styled.h1`
  font-size: 52px;
  padding-right: 30%;
  color: #21CDD9;
  @media (max-width: 700px) {
		padding: 2% 4%;
    font-size: 45px;
    text-align: left;
	}
`
export const H1Lateral = styled.p`
  margin-top: 17%;
  font-size: 22px;
  font-weight: bolder;
  padding-right: 20%;
  color: #21CDD9;
  text-align: center;
  @media (max-width: 700px) {
		padding: 2% 4%;
    text-align: left;
    margin-top: 7%;
	}
`
export const H1Autor = styled.p`
  font-size: 22px;
  font-weight: bolder;
  padding-right: 20%;
  color: white;
  text-align: right;
  @media (max-width: 700px) {
    text-align: right;
    padding-right: 2%;
	}
`

export const FundoBalao = styled.div`
    background: #21CDD9;
    border-radius: 10px;
    width: 67%;
    color: #fff;
    padding: 20px;
    border-right: 20px solid #151F28;
    border-bottom: 20px solid transparent;
    bottom: -20px;
    @media (max-width: 700px) {
      width: 100%;
      margin: 2%;
	}
`
export const Paragrafo = styled.p`
  font-size: 18px;
  color:black;
  margin: 3px 0;
  @media (max-width: 700px) {
    text-align: left;
    padding: 1%;
	}
`

export const ButtonsLogin = styled.button`
  width: 250px;
  height: 40px;
  color: #21CDD9;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 35%;
  background-color: transparent;
  border-radius: 20px;
  border-color: #21CDD9;
  :hover{
    background-color: #21CDD9;
    color: black;
    transition: 0.3s;
  }
  @media (max-width: 700px) {
      width: 80%;
      margin: 2%;
	}
`
export const ButtonsCadastro = styled.button`
  width: 250px;
  height: 40px;
  color: #21CDD9;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  background-color: transparent;
  border-radius: 20px;
  border-color: #21CDD9;
  :hover{
    background-color: #21CDD9;
    color: black;
    transition: 0.5s;
  }
  @media (max-width: 700px) {
      width: 80%;
      margin: 2%;
      margin-bottom: 10%;
	}
`