import * as C from "./style";

interface Props {
  id?: number;
  name: string;
  link: string;
  img: string;
  alt?: string;
}

export const Projeto: React.FC<Props> = ({ id, name, link, img, alt }) => {
  return (
    <C.Container key={id}>
      <div className="card">
        <a href={link}>
          <img src={img} alt={alt} />
          <div className="middle">
            <p>{name}</p>
          </div>
        </a>
      </div>
    </C.Container>
  );
};
