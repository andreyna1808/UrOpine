import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonsPost } from "../post/styledPost";
import CreateComments from "./createComments/createComments";
import ViewsComments from "./viewComments/viewComments";

export default function Comments() {
  const navigate = useNavigate();

  const returnPosts = () => {
    localStorage.removeItem('idComments');
    navigate('/posts') 
  }

  return (
    <div>
      <CreateComments/>
      <ViewsComments/>
      <ButtonsPost onClick={returnPosts}>Voltar aos posts</ButtonsPost>
    </div>
  );
}