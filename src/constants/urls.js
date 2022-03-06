export const BASE_URL = "https://labeddit.herokuapp.com"
export const Register_url = "https://labeddit.herokuapp.com/users/signup"
export const Login_url = "https://labeddit.herokuapp.com/users/login"
export const Post_url = "https://labeddit.herokuapp.com/posts" 
export const Auth = {
  headers: {
    Authorization: localStorage.getItem('tokenEddit')
  }
}
// + id do post // comments, ou +id do post // votes
export const IMG_url = 'https://pixabay.com/api/?key=25855379-87dbdfa77abd804199126f792'
//'https://pixabay.com/api/?key=25855379-87dbdfa77abd804199126f792' gerador de imagens
