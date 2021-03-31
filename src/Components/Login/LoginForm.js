import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../api";
import UserContext from "../../UserContext";
import Error from "../Helper/Error";

export const LoginForm = () => {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  // fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(),
  // })
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((json) => {
  //     console.log(json);
  //   });

  return (
    <section className="animeup">
      <h2>Seja Bem Vindo!</h2>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Button>Cancelar</Button>

        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginForm;
