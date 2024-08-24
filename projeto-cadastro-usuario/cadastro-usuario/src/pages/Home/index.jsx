import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/16qg.svg";
import api from "../../services/api";

//react hooks

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");

    setUsers(usersFromApi.data);
  }

  async function createUsers() {

    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    getUsers()
    window.location.reload()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers()
    window.location.reload()
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input ref={inputName} placeholder="Nome" name="nome" type="text" />
        <input
          ref={inputAge}
          placeholder="Idade"
          name="idade"
          type="text"
          inputMode="numeric"
        />
        <input
          ref={inputEmail}
          placeholder="E-mail"
          name="email"
          type="email"
        />
        <button onClick={createUsers} type="button">Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              nome: <span></span>
              {user.name}
            </p>
            <p>
              idade <span></span> {user.age}
            </p>
            <p>
              email <span></span> {user.email}
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
