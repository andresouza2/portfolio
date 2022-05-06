import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { ProjetoList } from "../../type/ProjetoList";
import { Projeto } from "@components/Projeto";
import * as C from "./style";

import AndreSouza2 from "@assets/andresouza2.jpg";
import Contador from "@assets/contador-manual.jpg";
import Costs from "@assets/costs.jpg";
import Login from "@assets/login-front.jpg";
import TodoList from "@assets/todo-list.jpg";
import Programming from "@assets/program.svg";
import curriculo from '@assets/download/cv-andre.pdf'
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
      <div className="container">
        <h1>ANDRÉ SOUZA - DEV FRONT-END</h1>

        <div className="imgPrincipal">
          <div className="download">
            <div>
            <h2>Sobre Mim</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias eveniet voluptate ipsum atque eius. Cupiditate nisi quam provident molestiae voluptatibus doloremque. Sed veritatis asperiores debitis ducimus assumenda perspiciatis et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere debitis sequi atque accusamus perspiciatis expedita eos perferendis dolores a. Distinctio laboriosam iusto dolorem fugiat dignissimos ullam obcaecati qui quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, ipsum officia quibusdam amet officiis odio molestiae quam in doloribus, sunt cumque earum soluta illum iste, mollitia explicabo eum quo?
            </p>
            </div>
          </div>
          <img
            src={Programming}
            alt="pessoa de costas programando"
            title="pessoa de costas programando"
          />
        </div>
        <div className="btn_download">
              <span>
                <FaFileDownload />
              </span>
              <button>
                <a
                  href={`${curriculo}`}
                  download="cv-andre.pdf"
                >
                  Baixe meu Curriculo
                </a>
              </button>
            </div>


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
