import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IMG_url, Post_url } from '../../../constants/urls';
import {
	Body,
	ButtonRemove,
	ContainerCard,
	ContainerInfo,
	ContainerProfile,
	ImgCards,
	ImgCardsComent,
	ImgPost,
	ImgProfile,
	InputDados,
	Loading,
	Options,
	ParagrafoText,
	Selects
} from '../styledPost';
import Gif from '../../../constants/imgs/loading.gif';

import darLike from '../../../constants/imgs/darLike.png';
import Like from '../../../constants/imgs/like.png';

import desLike from '../../../constants/imgs/deslike.png';
import darDesLike from '../../../constants/imgs/darDeslike.png';

import Comentar from '../../../constants/imgs/comentarios.png';
import ToastAnimated, { showToast } from '../../ui-lib';
import Share from '../Share';

export default function ViewPost() {
	const navigate = useNavigate();
	const [ infoPost, setInfoPost ] = useState([]);
	const [ info, setInfo ] = useState([]);

	const [ search, setSearch ] = useState('')
	const [ order, setOrder ] = useState('')

	const [ vote, setVote] = useState(0)

	const onSearch = (e) => {
		setSearch(e.target.value)
	}
	const onOrder = (e) => {
		setOrder(e.target.value)
	}

	const getPosts = () => {
		axios
			.get(Post_url, {
				headers: {
					Authorization: localStorage.getItem('tokenEddit')
				}
			})
			.then((res) => {
				setInfoPost(res.data);
			})
	};

	const getPhotos = () => {
		axios
			.get(IMG_url)
			.then((res) => {
				setInfo(res.data.hits);
			})
	};

	const idComments = (id) => {
		localStorage.setItem('idComments', id);
		navigate('/comments-post');
	};

	const postVoteLike = (idVote) => {
		const body = {
			direction: 1,
		}
		axios.post(`${Post_url}/${idVote}/votes`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenEddit')
			}
		})
		.then((res) => {
			setVote(1)
			showToast({ type: "success", message: "Você adicionou + 1 like ao post" });
		})
	};
	const postVoteDeslike = (idVote) => {
		const body = {
			direction: -1,
		}
		axios.post(`${Post_url}/${idVote}/votes`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenEddit')
			}
		})
		.then((res) => {
			setVote(-1)
			showToast({ type: "success", message: "Você deu -1 like ao post" });
		})
	};

	const deletVote = (idVote) => {
		axios.delete(`${Post_url}/${idVote}/votes`, {
			headers: {
				Authorization: localStorage.getItem('tokenEddit')
			}
		})
    .then((res) => {
			setVote(0)
			showToast({ type: "success", message: "Você deletou sua interação para adicionar novamente clique duas vezes no like ou deslike" });
    })
  }

	useEffect(
		() => {
			getPosts();
			getPhotos();
			postVoteLike();
			postVoteDeslike();
			deletVote();
		},
		[ infoPost, vote ]
	);


	return (
		<div>
			<div>
				<InputDados placeholder="Pesquise por nome ou título" value={search} onChange={onSearch}/>
				<Selects value={order} onChange={onOrder}>
					<Options value=''>Padrão</Options>
					<Options value='crescente'>Mais votados</Options>
					<Options value='decrescente'>Menos votados</Options>
				</Selects>
			</div>
			{infoPost && infoPost.length > 0 ? (
				infoPost.filter((posts) => {
					return posts.username.toLowerCase().includes(search.toLowerCase()) ||
					posts.title.toLowerCase().includes(search.toLowerCase()) 
				}).sort((a, b) => {
					if (order === "decrescente") {
							return a.voteSum - b.voteSum
					} else if (order === "crescente") {
							return b.voteSum - a.voteSum
					}})
				.map((posts, index) => {
					return (
						<ContainerCard key={posts.id}>
							<ToastAnimated/>
							<ContainerProfile>
								<ImgProfile src={info[index +1].userImageURL} />
								<ParagrafoText>{posts.title}</ParagrafoText>
								<p>@{posts.username}</p>
							</ContainerProfile>
							<div>
								<ImgPost src={info[index].largeImageURL} />
								<Body>{posts.body}</Body>
							</div>
							<ContainerInfo>
								<p>{posts.voteSum && posts.voteSum.length >= 1 ? <p>curtidas: {posts.voteSum}</p> : <p>curtidas: 0</p>}</p>
								<ImgCards onClick={() => postVoteLike(posts.id)} src={posts.userVote === 1 ? Like : darLike} alt="dar like" />
								<ImgCards onClick={() => postVoteDeslike(posts.id)} src={posts.userVote === -1 ? desLike : darDesLike} alt="dar like" />
								<ButtonRemove onClick={() => deletVote(posts.id)}>Zerar meu votos</ButtonRemove>
								<Share></Share>
								<ImgCardsComent onClick={() => idComments(posts.id)} src={Comentar} alt="dar like" />
								<p>{posts.commentCount && posts.commentCount.length >= 1 ? (<p>comentários: {posts.commentCount}</p>) : <p>comentário: 0</p> }</p>
							</ContainerInfo>
						</ContainerCard>
					);
				})
			) : (
				<div>
					<h1>Aguarde, pois estamos Carregando posts...</h1>
					<Loading src={Gif} />
				</div>
			)}
		</div>
	);
}
