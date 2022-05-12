import { useState } from "react";
import { ProjetoList } from "../../type/ProjetoList";
import { Projeto } from "@components/Projeto";
import * as C from "./style";

import AndreSouza2 from "@assets/andresouza2.jpg";
import Contador from "@assets/contador-manual.jpg";
import Costs from "@assets/costs.jpg";
import Login from "@assets/login-front.jpg";
import TodoList from "@assets/todo-list.jpg";
import Programming from "@assets/program.svg";
import curriculo from "@assets/download/cv-andre.pdf";
import Button from "@components/Button";

const Main = () => {
  const [dados, setDados] = useState<ProjetoList[]>([
    {
      id: 0,
      name: "Perfil Github",
      link: "https://github.com/andresouza2/andresouza2",
      img: `${AndreSouza2}`,
    },
    {
      id: 1,
      name: "Contador Manual",
      link: "https://github.com/andresouza2/contador-manual",
      img: `${Contador}`,
    },
    {
      id: 2,
      name: "Costs",
      link: "https://github.com/andresouza2/costs",
      img: `${Costs}`,
    },
    {
      id: 3,
      name: "Login front-End",
      link: "https://github.com/andresouza2/login-front",
      img: `${Login}`,
    },
    {
      id: 4,
      name: "Lista de Tarefas",
      link: "https://github.com/andresouza2/todo-list",
      img: `${TodoList}`,
    },
  ]);
  return (
    <C.Main>
      <C.Hero>
        <div className="containerSobreMim">
          <div className="sobreMim">
            <h1>ANDRÉ SOUZA - DEV FRONT-END</h1>
            <h2>Sobre Mim</h2>
            <p>
              Me Chamo André moro em Manaus-AM atualmente, sou formado em
              Análise e Desenvolvimento de Sistemas pela Unopar - Universidade
              do Paraná formado em 2017.
            </p>
            <button>
              <a href={`${curriculo}`} download="cv-andre.pdf">
                Baixe meu Curriculo
              </a>
            </button>
          </div>
        </div>
        <img
          src={Programming}
          alt="pessoa de costas programando"
          title="pessoa de costas programando"
          className="imagem"
        />
      </C.Hero>

      <div className="container">
        <h2>Projetos</h2>
        <div className="container__card">
          {dados.map((data) => (
            <Projeto
              key={data.id}
              name={data.name}
              link={data.link}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </C.Main>
  );
};
export default Main;
