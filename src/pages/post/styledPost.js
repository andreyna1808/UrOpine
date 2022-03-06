import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`
export const Body = styled.p`
  border: dashed 1px black;
  margin: 7px 0;
`

export const ContainerDados = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin: 2% 0;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
	}
`
export const Buttons = styled.button`
  margin: 0 5%;
  width: 500px;
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

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	margin: 3% auto;
	@media (max-width: 700px) {
		margin: 2% 10%;
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
  border-radius: 15px;
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
export const InputBody = styled.input`
	background: rgba(33,205,217,1);
	height: 80px;
	padding: 5px 20px;
  border-radius: 20px;
	font-weight: bolder;
  border-color: black;
  outline: none;
	::placeholder {
       color: black;
   }
	 @media (min-width: 1600px) {
		height: 120px;
	}
`

export const ButtonsPost= styled.button`
  margin-right: 0;
  margin-left: 60%;
  width: 40%;
  height: 40px;
  color: #21CDD9;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 2px;
  background-color: transparent;
  border-radius: 10px;
  border-color: #21CDD9;
  :hover{
    background-color: #21CDD9;
    color: black;
    transition: 0.5s;
  }
  @media (max-width: 700px) {
      width: 99%;
      margin: 1%;
      margin-bottom: 10%;
	}
`
export const ImgProfile = styled.img`
  width: 7%;
  border-radius: 80px;
  overflow: hidden;
`
export const ImgPost = styled.img`
    width: 80%;    
`
export const Loading = styled.img`
  width: 25%;
  margin-bottom: 30px;
`

export const ContainerCard = styled.div`
  border: dashed 2px #21CDD9;
  margin: 20px auto;
  width: 70%;
`
export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 35px;
  height: 9vh;
  overflow: hidden;
  background-color: rgba(30,35,45,1);
`
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  height: 7vh;
  overflow: hidden;
  background-color: rgba(30,35,45,1);
  @media (max-width: 700px) {
    height: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0;
  }
`

export const ParagrafoText = styled.p`
  font-size: 22px;
  font-weight: bolder;
  color: #21CDD9;
  padding-left: 7%;
  justify-content: center;
  @media (max-width: 700px) {
		padding: 2% 4%;
	}
`

export const ImgCards = styled.img`
  width: 40px;
  margin: 0px auto;
  cursor: pointer;
  :hover{
    width: 60px;
    transition: 0.3s;
  }
  @media (max-width: 700px) {
    width: 30px;
    margin: 7px auto;
    :hover{
    width: 40px;
    transition: 0.3s;
  }
  }
`
export const ImgCardsComent = styled.img`
  width: 50px;
  margin: 0px auto;
  cursor: pointer;
  :hover{
    width: 80px;
    transition: 0.3s;
  }
  @media (max-width: 700px) {
    width: 30px;
    margin: 7px auto;
    :hover{
    width: 40px;
    transition: 0.3s;
  }
  }
`
export const ButtonRemove= styled.button`
  width: 20%;
  border-radius: 50px;
  color: #21CDD9;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 2px;
  background-color: transparent;
  border-color: #21CDD9;
  :hover{
    background-color: #21CDD9;
    color: black;
    transition: 0.5s;
  }
  @media (max-width: 700px) {
  width: 100%;
  border-radius: 0;
  color: #21CDD9;
  font-size: 12px;
  }
`
export const Selects = styled.select`
    background-color: rgba(33,205,217,1);
    padding: 12px 22px;
    border-radius: 12px;
    color:black;
    font-weight: 900;
    width: 20%;
    height: 45px;
	`
	
export const Options = styled.option`
	font-weight: bolder;
  color: black;
`
export const InputDados = styled.input`
  width: 50%;
	background: rgba(33,205,217,1);
	height: 45px;
	margin: 1% 0;
	padding: 10px 30px;
  border-radius: 15px;
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
export const ModalImg = styled.img`
  text-align: left;
  margin: 0 5%;
`