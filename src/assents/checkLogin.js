import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"

export default function CheckLogin() {
	const navigate = useNavigate();

	useEffect(
		() => {
			const token = localStorage.getItem('tokenEddit');

			if (token === null) {
				navigate('/login');
			}
			else {
				navigate('/posts')
			}
		},
		[navigate]
	);
}