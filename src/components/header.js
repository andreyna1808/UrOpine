import styled from "styled-components";

export const Header = styled.header`
  height: 7vh;
  background-color: #69ceff;
  text-align: right;
  display: flex;
  justify-content: right;
  padding: 0 1%;
`

export const Img = styled.img`
  width: 8%;
  @media (max-width: 700px) {
		margin: 3% 0;
    width: 16%;
    text-align: center;
	}
`

export const Fundo = styled.div`
  background-color: #151F28;
  height: 100vh;
  color: white;
`