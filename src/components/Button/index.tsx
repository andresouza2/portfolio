interface Props {
  link?: string;
  text: string;
}

const Button: React.FC<Props> = ({ link, text }) => {
  return (
    <>
      <button>
        <a href={link ? link : "#"}>{text ? text : "Botão de Teste"}</a>
      </button>
    </>
  );
};

export default Button;
