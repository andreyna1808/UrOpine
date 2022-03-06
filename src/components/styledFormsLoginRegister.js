import styled from "styled-components";

export const H1 = styled.h1`
  margin-top: 2%;
`

export const Container = styled.div`
  text-align: center;
  align-items: center;
  margin: 5% auto;
  @media (max-width: 700px) {
    margin: 18.2% auto;
  }
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	margin: 3% auto;
	@media (max-width: 700px) {
		margin: 7% 10%;
		width: 300px;
	}
	@media (min-width: 1600px) {
		width: 80%;
		margin: 8% auto;
	}
`
export const Input = styled.input`
	background: rgba(33,205,217,1);
	height: 45px;
	margin: 1% 0;
	padding: 10px 30px;
  border-radius: 220px;
	font-weight: bolder;
  border-color: black;
  outline: none;
	::placeholder {
       color: black;
   }
	 @media (min-width: 1600px) {
		height: 60px;
	}
`
export const Buttons = styled.button`
  width: 280px;
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