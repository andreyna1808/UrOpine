import React, { useEffect, useState } from 'react';
import CheckLogin from '../../assents/checkLogin';
import { useNavigate } from 'react-router-dom';
import ViewPost from './viewPosts/viewPost';
import CreatePost from './createPost/createPost';
import { Buttons, Container, ContainerDados } from './styledPost';

export default function Post() {
	CheckLogin();
	const navigate = useNavigate();
	const [ token, setToken] = useState(localStorage.getItem('tokenEddit'))

	const logout = () => {
		localStorage.removeItem('tokenEddit');
		navigate('/');
	};
  const home = () => {
		navigate('/');
	};

	useEffect(()=>{
		verifyToken();
	}, [])

	const verifyToken = () => {
		if(token === null){
			localStorage.removeItem('tokenEddit');
			navigate('/');
		}
	}

	return (
		<Container>
			<ContainerDados>
				<Buttons onClick={home}>Voltar p/ Home</Buttons>
				<Buttons onClick={logout}>Fazer logout</Buttons>
			</ContainerDados>
			<CreatePost />
			<ViewPost />
		</Container>
	);
}
