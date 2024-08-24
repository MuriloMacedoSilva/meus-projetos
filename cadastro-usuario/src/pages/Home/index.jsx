import { useEffect, useState } from "react";
import "./style.css";
import Trash from "../../assets/16qg.svg";
import api from "../../services/api";

//react hooks

function Home() {
  const [users, setUsers] = useState([])

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");

    setUsers(usersFromApi.data)
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input
          placeholder="Idade"
          name="idade"
          type="number"
          inputMode="numeric"
        />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
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
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
