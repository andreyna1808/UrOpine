import React from "react";
import axios from "axios";
import useForm from "../../../hooks/useForm";
import { Post_url } from "../../../constants/urls";
import { toast } from "react-toastify";
import { ButtonsPost, Form, Input } from "../../post/styledPost";
import { DivCreateComments, H1 } from "../styledComments";
import ToastAnimated, { showToast } from "../../ui-lib";

export default function CreateComments() {
  const [form, onChange, clear ] = useForm({body:''})

  let idComments = localStorage.getItem('idComments')

  const commentsCreate = (e) => { 
    e.preventDefault()
   
    axios.post(`${Post_url}/${idComments}/comments`, form, {
      headers: {
        Authorization: localStorage.getItem('tokenEddit')
      }
    })
    .then((res) => {
      showToast({ type: "success", message: "Comentário criado com sucesso" });
      clear();
    })
    .catch((err) => {
    })
  }

  return (
    <DivCreateComments>
      <H1>Escreva seu comentário e veja os demais</H1>
      <ToastAnimated/>
      <Form onSubmit={commentsCreate}>
        <Input required name="body" type={'text'} value={form.body} onChange={onChange} placeholder="Envie seu comentário"></Input>
        <ButtonsPost type="submit" onClick={commentsCreate}>Enviar comentário</ButtonsPost>
      </Form>
    </DivCreateComments>
  );
}