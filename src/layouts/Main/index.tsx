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
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaSass,
  FaGitSquare,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

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
    <>
      <C.Hero>
        <div className="hero">
          <div className="container__hero">
            <div className="container__hero__texto">
              <h1>Olá, Sou André Souza</h1>
              <h2>Desenvolvedor Front-End | React JS</h2>
              <C.Button>
                <a href={`${curriculo}`} download="cv-andre.pdf">
                  Baixe meu Curriculo
                </a>
              </C.Button>
            </div>
          </div>
          <img
            src={Programming}
            alt="pessoa de costas programando"
            title="pessoa de costas programando"
            className="imagem"
          />
        </div>
      </C.Hero>
      <C.Main>
        <C.Sobre>
          <h2>Sobre Mim</h2>
          <p>
            Me chamo André C de Souza sou formado em Análise e Desenvolvimento
            de Sistemas pela Unopar - Universidade do Paraná no ano de 2017.
          </p>
          <p>
            Gosto de desafios e amo aprender coisas novas, sempre me
            reinventando e evoluindo em meus aprendizados.
          </p>
        </C.Sobre>
        <C.Projetos>
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
        </C.Projetos>
        <C.SoftSkills>
          <h2>Soft Skills</h2>
          <div className="soft__icons">
            <span className="item" id="item-1">
              <FaHtml5 />
            </span>
            <span className="item" id="item-2">
              <FaCss3 />
            </span>
            <span className="item" id="item-3">
              <FaJs />
            </span>
            <span className="item" id="item-4">
              <FaReact />
            </span>
            <span className="item" id="item-5">
              <SiTypescript />
            </span>
            <span className="item" id="item-6">
              <FaSass />
            </span>
            <span className="item" id="item-7">
              <BsBootstrapFill />
            </span>
            <span className="item" id="item-8">
              <FaGitSquare />
            </span>
          </div>
        </C.SoftSkills>
      </C.Main>
    </>
  );
};
export default Main;
